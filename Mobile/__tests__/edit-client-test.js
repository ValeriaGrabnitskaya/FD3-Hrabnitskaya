"use strict";

import { saveClient } from '../modules/saveClient';
import clientStatuses from '../static-data/client-statuses';
var clients = require('../data/clients.json');

test('проверка редактирования клиента', () => {

  var editClient = {
    id: 1,
    firstName: '1',
    secondName: '1',
    lastName: '1',
    balance: -100,
    status: clientStatuses.Blocked
  }

  var updatedClientsArray = clients.map((client) => {
    return client.id === editClient.id ? editClient : client
  })

  expect(saveClient(editClient, clients)).toEqual(updatedClientsArray);
  expect(saveClient(null, clients)).toEqual(clients);

});