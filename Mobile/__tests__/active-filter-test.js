"use strict";

import { filterClients } from '../modules/filterClients';
import clientStatuses from '../static-data/client-statuses';
var clients = require('../data/clients.json');

test('проверка фильтрации активных клиентов', () => {

  var activeClients = clients.filter((client) => client.status === clientStatuses.Active);

  expect(filterClients(clientStatuses.Active, clients)).toEqual(activeClients);
  expect(filterClients(clientStatuses.Blocked, clients)).not.toEqual(activeClients);
  expect(filterClients(null, clients)).not.toEqual(activeClients);

});
