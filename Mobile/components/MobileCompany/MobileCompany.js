import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';
import MobileClient from './MobileClient/MobileClient';
import clientStatuses from '../../static-data/client-statuses';
import AddEditClient from '../AddEditClient/AddEditClient';
import modes from '../../static-data/mode';
import { companyEvents } from '../events';

import { filterClients } from '../../modules/filterClients';
import { deleteClient } from '../../modules/deleteClient';
import { saveClient } from '../../modules/saveClient';

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
        selectedClientId: null,
        uniqueId: 4
    };

    componentDidMount = () => {
        companyEvents.addListener('SaveClient', this.saveUpdateClient);
        companyEvents.addListener('EditClient', this.editClient);
        companyEvents.addListener('CancelSaveClient', this.cancelSaveClient);
        companyEvents.addListener('DeleteClient', this.deleteSelectedClient);
    };

    componentWillUnmount = () => {
        companyEvents.removeListener('SaveClient', this.saveUpdateClient);
        companyEvents.removeListener('EditClient', this.editClient);
        companyEvents.removeListener('CancelSaveClient', this.cancelSaveClient);
        companyEvents.removeListener('DeleteClient', this.deleteClient);
    };

    saveUpdateClient = (savedClient) => {
        let copiedClients = saveClient(savedClient, this.state.clients);
        this.setState({ clients: copiedClients, mode: modes.none });
    }

    editClient = (selectedId) => {
        this.setState({ mode: modes.edit, selectedClientId: selectedId });
    }

    cancelSaveClient = () => {
        this.setState({ mode: modes.none, editClient: null })
    }

    deleteSelectedClient = (selectedId) => {
        let copiedClients = deleteClient(selectedId, this.state.clients);
        this.setState({ clients: copiedClients, mode: modes.none })
    }

    getFilteredClients = (status) => {
        let filteredArray = [];
        switch (status) {
            case clientStatuses.Active:
                filteredArray = filterClients(clientStatuses.Active, this.props.clients);
                break;
            case clientStatuses.Blocked:
                filteredArray = filterClients(clientStatuses.Blocked, this.props.clients);
                break;
            default:
                filteredArray = filterClients(null, this.props.clients);
                break;
        }
        this.setState({ clients: filteredArray })
    }

    addClient = () => {
        this.setState({ mode: modes.add, selectedClientId: null, uniqueId: this.state.uniqueId + 1 })
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
                <div className='MobileCompanyFilterButtons'>
                    <input type="button" id="allClientsBtn" className='MobileCompanyButton' value="Все" onClick={() => this.getFilteredClients()} />
                    <input type="button" id="activeFilterBtn" className='MobileCompanyButton' value="Активные" onClick={() => this.getFilteredClients(clientStatuses.Active)} />
                    <input type="button" id="blockedFilterBtn" className='MobileCompanyButton' value="Заблокированные" onClick={() => this.getFilteredClients(clientStatuses.Blocked)} />
                </div>
                <table className='MobileCompanyClients'>
                    <thead>
                        <tr>
                            <th className='TableHeader'>Фамилия</th>
                            <th className='TableHeader'>Имя</th>
                            <th className='TableHeader'>Отчество</th>
                            <th className='TableHeader'>Баланс</th>
                            <th className='TableHeader'>Статус</th>
                            <th className='TableHeader'>Редактировать</th>
                            <th className='TableHeader'>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>{clients}</tbody>
                </table>
                <input type="button" id="addBtn" className='MobileCompanyButton' value="Добавить клиента" onClick={this.addClient} />
                {
                    (isAddMode || isEditMode) && <AddEditClient mode={this.state.mode} client={selectedClient} uniqueId={this.state.uniqueId} />
                }
            </div>
        )
    }
}

export default MobileCompany;
