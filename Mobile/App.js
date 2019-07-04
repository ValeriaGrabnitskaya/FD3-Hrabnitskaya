"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import MobileCompany from './components/MobileCompany/MobileCompany';

var clients = require('./data/clients.json');

ReactDOM.render(
  <MobileCompany clients={clients}/>, document.getElementById('container')
)
