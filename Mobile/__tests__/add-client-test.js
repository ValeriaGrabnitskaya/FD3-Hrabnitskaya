"use strict";

import { saveClient } from '../modules/saveClient';
import clientStatuses from '../static-data/client-statuses';
var clients = require('../data/clients.json');

test('проверка добавления клиента', () => {

  var newClient = {
    id: 5,
    firstName: '1',
    secondName: '1',
    lastName: '1',
    balance: -100,
    status: clientStatuses.Blocked
  }

  var newClientsArray = [...clients, newClient];

  expect(saveClient(newClient, clients)).toEqual(newClientsArray);
  expect(saveClient(null, clients)).toEqual(clients);

});