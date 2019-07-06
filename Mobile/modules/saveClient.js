"use strict";

const saveClient = (savedClient, stateClients) => {
    let editClient = null;
    if (savedClient) {
        editClient = stateClients.find((client) => client.id === savedClient.id);
        if (editClient) {
            let copiedClients = [...stateClients];
            let editedClientIndex = stateClients.findIndex((client) => client.id === savedClient.id);
            copiedClients.splice(editedClientIndex, 1, savedClient)
            return copiedClients;
        } else {
            return [...stateClients, savedClient];
        }
    } else {
        return stateClients;
    }
}

export { saveClient };
