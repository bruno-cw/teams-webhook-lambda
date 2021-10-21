import { APIGatewayProxyEvent } from 'aws-lambda';
import axios from 'axios';
import CardCreator from './util/card-creator';
import MockCardCreator from './util/mock-card-creator';


const CHAT_URL = process.env.CHAT_URL as string;
const AUTHOR = process.env.AUTHOR || "ciandt_BR";
const WEATHER_CITY = process.env.WEATHER_CITY || "curitiba";
const WEATHER_KEY = process.env.WEATHER_KEY || "";
const BEARER_TOKEN = process.env.BEARER_TOKEN || "";
const BOT_IMAGE_URL = process.env.BOT_IMAGE_URL || "";
const MOCK_APIS = process.env.MOCK_APIS === "true";

export const run = async (event : APIGatewayProxyEvent) => {
  try {
    let message = MOCK_APIS? MockCardCreator.createCard(BOT_IMAGE_URL,AUTHOR,WEATHER_CITY):
     await CardCreator.createCard(BOT_IMAGE_URL,AUTHOR,BEARER_TOKEN,WEATHER_CITY,WEATHER_KEY);
    console.log ("sending message...")
    if (process.env.MODE === "test"){
      console.log(JSON.stringify(message, null, 4));
      return;
    }
    await axios.post(CHAT_URL, message.card);
    console.log("message sent successfully");
  } catch (err) {
    console.log(err);
    return err;
  }
  
};
