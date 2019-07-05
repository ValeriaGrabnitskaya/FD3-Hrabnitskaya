"use strict";

import { deleteClient } from '../modules/deleteClient';
var clients = require('../data/clients.json');

test('проверка удаления клиента', () => {

  var updateClients = clients.filter((client) => client.id !== clients[0].id);

  expect(deleteClient(clients[0].id, clients)).toEqual(updateClients);
  expect(deleteClient(clients[1].id, clients)).not.toEqual(updateClients);
  expect(deleteClient(null, clients)).toEqual(clients);

});