import getLocation from "apis/getLocation";

it("tests the mock call to geolocation.getCurrentPosition", () => {
  global.navigator.geolocation.getCurrentPosition.mockReturnValue(
    Promise.resolve({
      coords: {
        latitude: 51.1,
        longitude: 45.3,
      },
    })
  );
  getLocation(
    () => {},
    () => {}
  );
  expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
});
