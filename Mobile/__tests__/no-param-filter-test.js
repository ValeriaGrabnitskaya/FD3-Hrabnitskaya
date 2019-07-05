"use strict";

import { filterClients } from '../modules/filterClients';
import clientStatuses from '../static-data/client-statuses';
var clients = require('../data/clients.json');

test('проверка получения всех клиентов', () => {

  expect(filterClients(null, clients)).toEqual(clients);
  expect(filterClients(clientStatuses.Active, clients)).not.toEqual(clients);
  expect(filterClients(clientStatuses.Blocked, clients)).not.toEqual(clients);

});
