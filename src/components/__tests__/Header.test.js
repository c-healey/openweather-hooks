import React from "react";
import { MemoryRouter} from "react-router-dom";
import { mount } from "enzyme";

import Header from "components/Header";

describe("test the header", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<MemoryRouter><Header lat={51} lng={-83} /></MemoryRouter>);
  });
  afterEach(() => {
    wrapped.unmount();
  });
  it("shows a div", () => {
    expect(wrapped.find("div").length).toEqual(1);
  });

  it("has two nanchor tags", () => {
    expect(wrapped.find("a").length).toEqual(2);
  });
});
