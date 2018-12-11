import React from 'react'
import {shallow} from 'enzyme';

import Movies from "../Movies";


describe("<Movies/>", () => {

    it("Debe ejecutar render correctamente",() => {
        const component =  shallow(<Movies/>)
        expect(component).toMatchSnapshot();
    })


})