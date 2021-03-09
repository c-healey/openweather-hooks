import React from "react";
import { MemoryRouter} from "react-router-dom";
import { shallow, mount } from "enzyme";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

import SearchPlaces, {Search} from "components/SearchPlaces";


// describe("test the SearchPlaces", () => {
//   let wrapped;
//   beforeEach(() => {
//       const Header = ()=>{
//           const panTo = React.useCallback(({ lat, lng }) => {
//         console.log("Test SearchPlaces");
  
//       },[]);
//       return <SearchPlaces panTo={panTo} />
//       }
    
//     wrapped = mount(<MemoryRouter><Header></Header></MemoryRouter>);
//   });
//   afterEach(() => {
//     wrapped.unmount();
//   });
  

 
//   it('has an SearchPlaces Component', ()=>{
//   expect(wrapped.find('input').length).toEqual(1);
//     }); 
// });
describe('shallow tests on Search Places and Search', ()=>{
   
    it('renders SearchPlaces', ()=>{
    const wrapper = shallow(<SearchPlaces/>);
    expect(wrapper.exists()).toBe(true)
})
it('Renders Search', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.exists()).toBe(true);
});
it('has one div field', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.find('div').length).toEqual(1)
})
it('has a comboBox component', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.find(Combobox).length).toEqual(1)
})
it('has a comboBoxInput component', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.find(ComboboxInput).length).toEqual(1)
})
it('has a ComboboxPopover component', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.find(ComboboxPopover).length).toEqual(1)
})
it('has a ComboboxList component', ()=>{
    const wrapper = shallow(<Search panTo={()=>{console.log('panTo callback')}}/>);
    expect(wrapper.find(ComboboxList).length).toEqual(1)
})



})
