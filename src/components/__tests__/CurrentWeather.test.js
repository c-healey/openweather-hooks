import React from "react";
import {MemoryRouter} from 'react-router-dom';
import {  mount, shallow} from "enzyme";
import axios from 'axios';


import CurrentWeather from "components/CurrentWeather";

let wrapped;
let response;
jest.mock("axios");
  jest.setTimeout(50000);
describe("Current Weather deeper tests", () => {
  
  beforeEach(() => {
    wrapped = mount(<MemoryRouter>
      <CurrentWeather />
      </MemoryRouter>);

global.navigator.geolocation.getCurrentPosition.mockReturnValue(
  Promise.resolve({
    coords: {
      latitude: 51.1,
      longitude: 45.3,
    },
  })
);
 response = {
    data: {
      current: {
        dt: 1614885081,
        feels_like: 18.07,
        temp: 28.6,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
    },
  
};

  });
  afterEach(() => {
    wrapped.unmount();
  });
//   //  I was not able to get the url params passed, could not get page after async resolves 
it("calls global.navigator.geolocation.getCurrentPosition", () => {
  //  with match passed useParams whould have gotten the location and skipped calling the stub.
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
  // it('calls axios', ()=>{
  //   axios.get.mockResolvedValue(response);
  //   expect(axios).toHaveBeenCalled();
  // })
 
});
describe('shallow tests', ()=>{
  beforeEach(()=>{
    wrapped = shallow( <MemoryRouter>
      <CurrentWeather />
      </MemoryRouter>);
  })
  it('renders CurrentWeather', ()=>{
    expect(wrapped.exists()).toBe(true);
  })
  it("Is Loading", () => {
    expect(wrapped.html()).toEqual("<div>Loading...</div>");
  });
})
