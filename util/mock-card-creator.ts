import { CardChatMessage } from "../model/chatcard";
import { IWeatherReport, WeatherReport } from "../model/weatherReport";

const createCard = (
  botImageUrl: string,
  author: string,
  city: string
): CardChatMessage => {
  return new CardChatMessage(
    botImageUrl,
    getTweetText(author),
    getWeather(city)
  );
};

const getTweetText = (author): string => {
  return `fake tweet from ${author}`;
};

const getWeather = (city): IWeatherReport => {
  return new WeatherReport(
    `Fake Weather for ${city}`,
    "mock description",
    "25",
    "15",
    "30",
    "27"
  );
};

export default { createCard };
