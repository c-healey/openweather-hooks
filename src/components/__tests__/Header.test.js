import React from "react";
import { MemoryRouter, Link } from "react-router-dom";
import axios from "axios";
import { mount, shallow } from "enzyme";

import Header from "components/Header";
import SearchPlaces from "components/SearchPlaces";
import { LocationProvider } from "contexts/LocationContext";
import { CurrentWeatherProvider } from "contexts/CurrentWeatherContext";
import { ForecastWeatherProvider } from "contexts/ForecastWeatherContext";
import getAxiosData from "apis/getAxiosData";

jest.mock("axios");
// jest.setTimeout(50000);
describe("header deeper tests", () => {
  let wrapper;
  let response;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <LocationProvider>
          <CurrentWeatherProvider>
            <ForecastWeatherProvider>
              <Header />
            </ForecastWeatherProvider>
          </CurrentWeatherProvider>
        </LocationProvider>
      </MemoryRouter>
    );
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
    wrapper.unmount();
  });
  it("has 2  Links", () => {
    expect(wrapper.find(Link).length).toEqual(2);
  });
  it("has 1 SearchPlaces", () => {
    expect(wrapper.find(SearchPlaces).length).toEqual(1);
  });
  it("has two anchor tags", () => {
    expect(wrapper.find("a").length).toEqual(2);
  });
  it("calls global.navigator.geolocation.getCurrentPosition", () => {
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
  // it("calls axios", () => {
  //   axios.get.mockResolvedValue(response);
  //   getAxiosData(()=>{}, )
  //   expect(axios).toHaveBeenCalled();
  // });
});

describe("Header shallow tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <LocationProvider>
          <CurrentWeatherProvider>
            <ForecastWeatherProvider>
              <Header />
            </ForecastWeatherProvider>
          </CurrentWeatherProvider>
        </LocationProvider>
      </MemoryRouter>
    );
  });
  it("Renders Header", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("contains Current Weather", () => {
    expect(wrapper.html()).toContain("Current Weather");
  });
  it("contains Forecast", () => {
    expect(wrapper.html()).toContain("Forecast");
  });
  it("has 1 SearchPlaces", () => {
    expect(wrapper.html()).toContain("Loading Search");
  });
});
