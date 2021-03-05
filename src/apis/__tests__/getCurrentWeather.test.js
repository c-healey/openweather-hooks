import axios from "axios";

import getCurrentWeather from "apis/getCurrentWeather";

jest.mock("axios");
it("tests mocking axios", () => {
  const response = {
    status: 200,
    response: {
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
    },
  };
  axios.get.mockResolvedValue(response);
  getCurrentWeather(() => {}, "");
  expect(axios.get).toHaveBeenCalled();
});