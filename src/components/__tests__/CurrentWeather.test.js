import React from "react";
import {MemoryRouter} from 'react-router-dom';
import {  mount, shallow} from "enzyme";


import {LocationProvider} from 'contexts/LocationContext';
import {CurrentWeatherProvider} from 'contexts/CurrentWeatherContext';
import CurrentWeather from "components/CurrentWeather";

let wrapped;


describe('shallow tests', ()=>{
  beforeEach(()=>{
    wrapped = shallow( <MemoryRouter>
      <LocationProvider>
        <CurrentWeatherProvider>
          <CurrentWeather />
        </CurrentWeatherProvider>
      </LocationProvider>
      </MemoryRouter>
      );
  })
  it('renders CurrentWeather', ()=>{
    expect(wrapped.exists()).toBe(true);
  })
  it("Is Loading", () => {
    expect(wrapped.html()).toEqual("<div>Loading...</div>");
  });
})
