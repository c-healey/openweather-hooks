import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import { mount} from 'enzyme'

import ForeCast from 'components/Forecast';
describe("shallow tests", () => {
let wrapped;

beforeEach(()=>{
    wrapped = mount(<MemoryRouter>
        <ForeCast match={{params:{lt:51.1, lg:-83}}}/>
        </MemoryRouter>);
});
it('contains heading Current Weather', ()=>{
    expect(wrapped.html()).toEqual('<div>Loading...</div>');
})
// it('include a .weather-icon', ()=>{
//     expect(wrapped.find("i").length).toEqual(1);
// })
})
