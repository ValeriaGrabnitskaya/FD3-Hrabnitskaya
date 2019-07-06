"use strict";

import renderer from 'react-test-renderer';
import React from 'react';

import MobileCompany from '../components/MobileCompany/MobileCompany';
import MobileClient from '../components/MobileCompany/MobileClient/MobileClient';
import { getNewUpdateClient } from '../modules/getNewUpdateClient';

var clients = require('../data/clients.json');

test('проверка создание клиента', () => {

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients} />
    );

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    const newClient = {
        id: 5,
        firstName: '1',
        secondName: '1',
        lastName: '1',
        balance: -10
    };

    const editBtn = MobileCompanyComponent.root.find((el) => el.props.id == 'addBtn');
    editBtn.props.onClick();

    getNewUpdateClient(newClient);

    let componentTree2 = MobileCompanyComponent.toJSON();
    expect(componentTree2).toMatchSnapshot();
});