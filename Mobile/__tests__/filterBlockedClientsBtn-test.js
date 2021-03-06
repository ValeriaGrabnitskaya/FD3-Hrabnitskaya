"use strict";

import renderer from 'react-test-renderer';
import React from 'react';

import MobileCompany from '../components/MobileCompany/MobileCompany';

var clients = require('../data/clients.json');

test('проверка фильтрации заблокированных клиентов', () => {

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients}/>
    );

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    var activeFilterBtn = MobileCompanyComponent.root.find((el) => el.props.id == 'blockedFilterBtn')
    activeFilterBtn.props.onClick();

    componentTree=MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();
});