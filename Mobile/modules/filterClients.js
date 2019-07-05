"use strict";

const filterClients = (status, clients) => {
    var filteredArray = [];
    if (status) {
        filteredArray = clients.filter((client) => {
            return client.status === status
        })
    } else {
        filteredArray = clients;
    }
    return filteredArray;
}

export { filterClients };
