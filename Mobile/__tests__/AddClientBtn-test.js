"use strict";

import renderer from 'react-test-renderer';
import React from 'react';

import MobileCompany from '../components/MobileCompany/MobileCompany';

var clients = require('../data/clients.json');

test('проверка создание клиента', () => {

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients} />
    );

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    const addBtn = MobileCompanyComponent.root.find((el) => el.props.id == 'addBtn');
    addBtn.props.onClick();

    let componentTree2 = MobileCompanyComponent.toJSON();
    expect(componentTree2).toMatchSnapshot();
});