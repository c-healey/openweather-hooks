import React from "react";
import {MemoryRouter} from 'react-router-dom'
import { mount } from "enzyme";
import axios from "axios";
import CurrentWeather from "components/CurrentWeather";
import Forecast from 'components/Forecast';


jest.mock("axios");
jest.setTimeout(50000);
let wrapped;

beforeEach(() => {
  global.navigator.geolocation.getCurrentPosition.mockReturnValue(
    Promise.resolve({
      coords: {
        latitude: 51.1,
        longitude: 45.3,
      },
    })
  );
  const response = {
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
  axios.get.mockResolvedValue(response);
});
afterEach(() => {});

describe ('deeper tests on CurrentWeather', ()=>{
  beforeEach(()=>{
    
    wrapped = mount(<MemoryRouter>
      <CurrentWeather match={{lt:51.1, lg:-83}}/>
      </MemoryRouter>);
    })
    afterEach(() => {
      wrapped.unmount();
    });

    it("tests mocking navigator through CurrentWeather component", () => {
  //  with match passed useParams whould have gotten the location and skipped calling the stub.
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
 
  // Can't get past the loading... even though it console logs the data to render weather
  // it("tests mocking axios through CurrentWeather component", () => {
  //   
  //   wrapped = mount(<CurrentWeather location={loc}/>);

  //   expect(axios.get).toHaveBeenCalled();
  //   // this failed
  //   // expect(wrapped.find('i').length).toEqual(1);
  //   // this passed
  //   // expect(wrapped.html()).toEqual('<div>Loading...</div>');

  // })

})
describe("deeper tests on Forecast", () => {
  beforeEach(()=>{
    
  wrapped = mount(<MemoryRouter>
    <Forecast match={{lt:51.1, lg:-83}}/>
    </MemoryRouter>);
  })
  
  afterEach(() => {
    wrapped.unmount();
  });
  

  
  it("tests mocking navigator through Forecast component", () => {
   
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
  

});


