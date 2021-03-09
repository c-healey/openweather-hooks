import React from "react";
import { MemoryRouter, Link} from "react-router-dom";
import { mount, shallow } from "enzyme";

import Header from "components/Header";
import SearchPlaces from 'components/SearchPlaces';


describe("test the header", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<MemoryRouter><Header /></MemoryRouter>);
  });
  afterEach(() => {
    wrapped.unmount();
  });
  

  it("has two anchor tags", () => {
    expect(wrapped.find("a").length).toEqual(2);
  });
  
  
});
describe('Header shallow tests', ()=>{
  let wrapper;
  beforeEach(() => {
   
     wrapper = shallow(<Header/>);
  });
  it('Renders Header', ()=>{
    
    expect(wrapper.exists()).toBe(true);
});
it("has 2  Links", () => {
  
  expect(wrapper.find(Link).length).toEqual(2);
});
it("has 1 SearchPlaces", () => {

  expect(wrapper.find(SearchPlaces).length).toEqual(1);
});



})
