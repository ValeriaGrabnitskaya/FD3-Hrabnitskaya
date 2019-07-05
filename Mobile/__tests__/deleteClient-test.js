"use strict";

import renderer from 'react-test-renderer';
import React from 'react';

import MobileCompany from '../components/MobileCompany/MobileCompany';
import MobileClient from '../components/MobileCompany/MobileClient/MobileClient';

var clients = require('../data/clients.json');

test('проверка удаления клиента', () => {

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients}/>
    );

    const MobileClientComponent = renderer.create(
        <MobileClient key={clients[0].id} client={clients[0]}/>
    );

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    var deleteBtn = MobileClientComponent.root.find((el) => el.props.id == 'deleteBtn')
    deleteBtn.props.onClick();

    componentTree=MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();
});