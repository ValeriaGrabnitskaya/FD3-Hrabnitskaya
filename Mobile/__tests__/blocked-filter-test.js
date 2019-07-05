"use strict";

import { filterClients } from '../modules/filterClients';
import clientStatuses from '../static-data/client-statuses';
var clients = require('../data/clients.json');

test('проверка фильтрации заблокированных клиентов', () => {

  var blockedClients = clients.filter((client) => client.status === clientStatuses.Blocked);

  expect(filterClients(clientStatuses.Blocked, clients)).toEqual(blockedClients);
  expect(filterClients(clientStatuses.Active, clients)).not.toEqual(blockedClients);
  expect(filterClients(null, clients)).not.toEqual(blockedClients);

});
