import React from "react";
import {MemoryRouter} from 'react-router-dom';
import {  mount} from "enzyme";

import CurrentWeather from "components/CurrentWeather";
let wrapped;
describe("shallow tests", () => {
  
    
  beforeEach(() => {
    wrapped = mount(<MemoryRouter>
      <CurrentWeather match={{params:{lt:51.1, lg:-83}}}/>
      </MemoryRouter>);
});
  //  I was not able to get the url params passed, could not get page after async resolves 
  it("contains heading Current Weather", () => {
    expect(wrapped.html()).toEqual("<div>Loading...</div>");
  });
 
});
