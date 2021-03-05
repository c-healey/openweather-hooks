import React from "react";
import { mount, shallow } from "enzyme";
import {HashRouter, Route} from 'react-router-dom';

import App from "components/App";
import Header from "components/Header";
import CurrentWeather from "components/CurrentWeather";
import Forecast from "components/Forecast";

describe("shallow tests", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it("shows a header", () => {
    expect(wrapped.find(Header).length).toEqual(1);
  });
  it('contains 1 HashRouter',()=>{
    expect(wrapped.find(HashRouter).length).toEqual(1);
  });
  it('contains 2 Routes',()=>{
    expect(wrapped.find(Route).length).toEqual(2);
  })
  
});

describe('routes using array of routers', () => {
    let pathMap = {};
    let wrapped;
   
  beforeAll(() => {
    wrapped = shallow(<App />);;
    pathMap = wrapped.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
    
  })
  it('should show Current Weather component for / router (getting array of routes)', () => {

    expect(pathMap['/:lt?/:lg?']).toBe(CurrentWeather);
  })
  it('should show Forecast component for /forecast router', () => {
    expect(pathMap['/forecast/:lt?/:lg?']).toBe(Forecast);
  })
 
})

describe("full tests", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<App />);
  });
  afterEach(() => {
    wrapped.unmount();
  });
  it("shows current weather", () => {
    expect(wrapped.find(CurrentWeather).length).toEqual(1);
  });
  it("has two navigation links", () => {
    expect(wrapped.find("a").length).toEqual(2);
  });
  
  
  
});
