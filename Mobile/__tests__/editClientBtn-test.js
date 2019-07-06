"use strict";

import renderer from 'react-test-renderer';
import React from 'react';

import MobileCompany from '../components/MobileCompany/MobileCompany';
import MobileClient from '../components/MobileCompany/MobileClient/MobileClient';

var clients = require('../data/clients.json');

test('проверка редактирования клиента', () => {

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients} />
    );

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    const updateClient = {
        id: 1,
        firstName: '1',
        secondName: '1',
        lastName: '1',
        balance: -10
    };

    const MobileClientComponent = renderer.create(
        <MobileClient key={updateClient.id} client={clients[updateClient.id-1]} />
    );

    const editBtn = MobileClientComponent.root.find((el) => el.props.id == 'editBtn');
    editBtn.props.onClick();

    let componentTree2 = MobileCompanyComponent.toJSON();
    expect(componentTree2).toMatchSnapshot();
});