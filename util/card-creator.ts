import axios, { AxiosRequestConfig } from "axios";
import { CardChatMessage } from "../model/chatcard";
import { IWeatherReport, WeatherReport } from "../model/weatherReport";
const createCard = async (
  botImageUrl: string,
  author: string,
  token: string,
  city: string,
  apiKey: string
): Promise<CardChatMessage> => {
  return new CardChatMessage(
    botImageUrl,
    await getTweetText(author, token),
    await getWeather(city, apiKey)
  );
};

const getTweetText = async (author, token): Promise<string> => {
  console.log("Fetching tweet...")
  var config: AxiosRequestConfig = {
    method: "get",
    url: `https://api.twitter.com/2/tweets/search/recent?query=@${author}`,
    headers: {
      Authorization: token,
    },
  };
  let response;
  try {
    response = await axios(config);
  } catch (error) {
    throw `error fetching tweets: ${error}`;
  }
  return response.data.data[0].text;
};

const getWeather = async (city, apiKey): Promise<IWeatherReport> => {
  console.log("Fetching weather...")
  var config: AxiosRequestConfig = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
  };
  let response;
  try {
    response = await axios(config);
  } catch (error) {
    throw `error fetching weather: ${error}`;
  }
  
  return new WeatherReport(
    response.data.weather[0].main,
    response.data.weather[0].description,
    response.data.main.temp.toString(),
    response.data.main.temp_min.toString(),
    response.data.main.temp_max.toString(),
    response.data.main.feels_like.toString()
  );
};

export default {createCard}