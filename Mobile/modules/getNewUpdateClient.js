"use strict";

import clientStatuses from '../static-data/client-statuses';
import { companyEvents } from '../components/events';

const getNewUpdateClient = (newClientData, currentClientData) => {
    var client = {
        ...currentClientData,
        id: newClientData.id,
        firstName: newClientData.firstName,
        secondName: newClientData.secondName,
        lastName: newClientData.lastName,
        balance: +newClientData.balance,
        status: +newClientData.balance > 0 ? clientStatuses.Active : clientStatuses.Blocked
    }
    companyEvents.emit('SaveClient', client);
}

export { getNewUpdateClient };
