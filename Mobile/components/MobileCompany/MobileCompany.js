import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';
import MobileClient from './MobileClient/MobileClient';
import clientStatuses from '../../static-data/client-statuses';
import AddEditClient from '../AddEditClient/AddEditClient';
import modes from '../../static-data/mode';
import { companyEvents } from '../events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                firstName: PropTypes.string.isRequired,
                secondName: PropTypes.string.isRequired,
                lastName: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.string.isRequired
            })
        )
    };

    state = {
        clients: this.props.clients,
        mode: null,
        selectedClientId: null
    };

    componentDidMount = () => {
        companyEvents.addListener('SaveClient', this.saveClient);
        companyEvents.addListener('EditClient', this.editClient);
        companyEvents.addListener('CancelSaveClient', this.cancelSaveClient);
        companyEvents.addListener('DeleteClient', this.deleteClient);
    };

    componentWillUnmount = () => {
        companyEvents.removeListener('SaveClient', this.saveClient);
        companyEvents.removeListener('EditClient', this.editClient);
        companyEvents.removeListener('CancelSaveClient', this.cancelSaveClient);
        companyEvents.removeListener('DeleteClient', this.deleteClient);
    };

    saveClient = (savedClient) => {
        if (this.state.mode === modes.add) {
            this.setState({ clients: [...this.state.clients, savedClient], mode: modes.none });
        }
        if (this.state.mode === modes.edit) {
            let copiedClients = [...this.state.clients];
            copiedClients.forEach((client, i) => {
                if (client.id == savedClient.id) {
                    copiedClients.splice(i, 1, savedClient)
                }
            });
            this.setState({ clients: copiedClients, mode: modes.none });
        }
    }

    editClient = (selectedId) => {
        this.setState({ mode: modes.edit, selectedClientId: selectedId });
    }

    cancelSaveClient = () => {
        this.setState({ mode: modes.none, editClient: null })
    }

    deleteClient = (selectedId) => {
        let copiedClients = [...this.state.clients];
        copiedClients.forEach((client, i) => {
            if (client.id == selectedId) {
                copiedClients.splice(i, 1);
            }
        });
        this.setState({ clients: copiedClients })
    }

    getFilteredClients = (status) => {
        switch (status) {
            case clientStatuses.Active:
                this.filterClients(clientStatuses.Active);
                break;
            case clientStatuses.Blocked:
                this.filterClients(clientStatuses.Blocked);
                break;
            default:
                this.filterClients();
                break;
        }
    }

    filterClients = (status) => {
        var filteredArray = [];
        if (status) {
            filteredArray = this.props.clients.filter((client) => {
                return client.status === status
            })
        } else {
            filteredArray = this.props.clients;
        }

        this.setState({ clients: filteredArray })
    }

    addClient = () => {
        this.setState({ mode: modes.add, editClient: null })
    }

    render() {
        console.log("MobileCompany render");

        var clients = this.state.clients.map(client =>
            <MobileClient key={client.id} client={client} />
        );

        var selectedClient = this.state.clients.find((client) => client.id === this.state.selectedClientId);

        var isAddMode = this.state.mode == modes.add;
        var isEditMode = this.state.mode == modes.edit;

        return (
            <div className='MobileCompany'>
                <input type="button" value="Все" onClick={() => this.getFilteredClients()} />
                <input type="button" value="Активные" onClick={() => this.getFilteredClients(clientStatuses.Active)} />
                <input type="button" value="Заблокированные" onClick={() => this.getFilteredClients(clientStatuses.Blocked)} />
                <table className='MobileCompanyClients'>
                    <thead>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>{clients}</tbody>
                </table>
                <input type="button" value="Добавить клиента" onClick={this.addClient} />
                {
                    (isAddMode || isEditMode) && <AddEditClient mode={this.state.mode} client={selectedClient} />
                }
            </div>
        )
    }
}

export default MobileCompany