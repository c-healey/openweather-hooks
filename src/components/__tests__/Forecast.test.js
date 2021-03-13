import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import { mount} from 'enzyme'

import ForeCast from 'components/Forecast';
import {ForecastWeatherProvider} from 'contexts/ForecastWeatherContext';
import {LocationProvider} from 'contexts/LocationContext';

describe("shallow tests", () => {
let wrapped;

beforeEach(()=>{
    wrapped = mount(<MemoryRouter>
        <LocationProvider>
        <ForecastWeatherProvider>
          <ForeCast match={{params:{lt:51.1, lg:-83}}}/>
          </ForecastWeatherProvider>
        </LocationProvider>
        </MemoryRouter>);
});
it('contains heading Current Weather', ()=>{
    expect(wrapped.html()).toEqual('<div>Loading...</div>');
})
// it('include a .weather-icon', ()=>{
//     expect(wrapped.find("i").length).toEqual(1);
// })
})
