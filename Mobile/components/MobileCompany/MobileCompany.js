import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';
import MobileClient from './MobileClient/MobileClient';
import clientStatuses from '../../static-data/client-statuses';
import AddEditClient from '../AddEditClient/AddEditClient';
import modes from '../../static-data/mode';

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
        mode: null
    };

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
        this.setState({ mode: modes.add })
    }

    render() {
        console.log("MobileCompany render");

        var clients = this.state.clients.map(client =>
            <MobileClient key={client.id} client={client} />
        );

        var isAddMode = this.state.mode === modes.add;
        var isEditMode = this.state.mode === modes.edit;

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
                    (isAddMode || isEditMode) &&
                    <AddEditClient mode={this.state.mode}/>
                }
            </div>
        )
    }
}

export default MobileCompany