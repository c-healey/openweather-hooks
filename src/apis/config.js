export const API_BASE_URL = 'https://api.openweathermap.org';
export const API_CURRENT_WEATHER_URL = 
`${API_BASE_URL}/data/2.5/onecall?units=imperial&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_DEFAULT_KEY}`
export const API_FORECAST_WEATHER_URL = 
`${API_BASE_URL}/data/2.5/forecast?units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_DEFAULT_KEY}`


// http://api.openweathermap.org/data/2.5/forecast?q=Detroit,us&appid=48db6016cb32f4b78da9eae4ccd4859d&units=imperial

// https://api.openweathermap.org/data/2.5/onecall?lat=43.441792&lon=-89.037689&exclude=hourly,minutely,alerts&units=imperial&appid=48db6016cb32f4b78da9eae4ccd4859d

// exclude=hourly,minutely,alerts