"use strict";

const deleteClient = (selectedId, stateClients) => {
    let copiedClients = [...stateClients];
    copiedClients.forEach((client, i) => {
        if (client.id == selectedId) {
            copiedClients.splice(i, 1);
        }
    });
    return copiedClients;
}

export { deleteClient };
