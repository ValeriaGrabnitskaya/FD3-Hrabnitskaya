"use strict";

import renderer from 'react-test-renderer';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MobileCompany from '../components/MobileCompany/MobileCompany';
import AddEditClient from '../components/AddEditClient/AddEditClient';
import modes from '../static-data/mode';
import clientStatuses from './../static-data/client-statuses';
import MobileClient from './../components/MobileCompany/MobileClient/MobileClient';

var clients = require('../data/clients.json');

test('проверка редактирования клиента', () => {

    configure({ adapter: new Adapter() });

    const MobileCompanyComponent = renderer.create(
        <MobileCompany clients={clients} />
    );

    const updateClient = {
        id: 1,
        firstName: '1',
        secondName: '1',
        lastName: '1',
        balance: -10,
        status: clientStatuses.Blocked
    };

    let componentTree = MobileCompanyComponent.toJSON();
    expect(componentTree).toMatchSnapshot();

    const MobileClientComponent = renderer.create(
        <MobileClient key={clients[0].id} client={clients[0]} />
    );

    var editBtn = MobileClientComponent.root.find((el) => el.props.id == 'editBtn')
    editBtn.props.onClick();

    // const AddEditClientComponent = renderer.create(
    //     <AddEditClient mode={modes.edit} client={updateClient} />
    // );

    // let componentTree2 = AddEditClientComponent.toJSON();
    // expect(componentTree2).toMatchSnapshot();

    const wrapper = mount(<AddEditClient mode={modes.edit} client={updateClient} />);
    wrapper.setProps({ mode: modes.edit, client: updateClient});
    // expect(wrapper.find('#firstName').innerText).to.equal('1')


    // wrapper.find('#firstName').simulate('click', {
    //     target: { value: "2" },
    // })

    // let componentTree = AddEditClientComponent.toJSON();
    // expect(componentTree).toMatchSnapshot();

    var saveClientBtn = MobileCompanyComponent.root.find((el) => el.props.id == 'saveBtn')
    saveClientBtn.props.onClick();

    expect(componentTree).toMatchSnapshot();

    // var firstName = MobileCompanyComponent.root.find((el) => el.props.id == 'firstName')

    // MobileCompanyComponent.root.find('#firstName').simulate('change', {
    //     target: { value: "1" },
    // });


    // componentTree = MobileCompanyComponent.toJSON();
    // expect(componentTree).toMatchSnapshot();

    // expect(firstName.ref('firstName').innerText).to.equal('1')

    // const AddEditClientComponent = renderer.create(
    //     <AddEditClient mode={modes.add} client={updateClient}/>
    // );

    // var saveClientBtn = MobileCompanyComponent.root.find((el) => el.props.id == 'saveBtn')
    // saveClientBtn.
    // saveClientBtn.props.onClick();

    // componentTree=MobileCompanyComponent.toJSON();
    // expect(componentTree).toMatchSnapshot();
});