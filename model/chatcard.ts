import { IWeatherReport } from "./weatherReport";

export interface IChatCard {
  "@type": string;
  "@context": string;
  themeColor: string;
  summary: string;
  sections: IChatSection[];
}
export interface IChatSection {
  activityTitle: string;
  activitySubtitle: string;
  activityImage: string;
  markdown: boolean;
  facts: IFact[];
}

export interface IChatMessage {
  card?: IChatCard;
  text?: string;
}
export interface IFact {
  name: string;
  value: string;
}

export class CardChatMessage implements IChatMessage {
  public card: IChatCard;
  constructor(
    botImageUrl: string,
    message: string,
    weatherReport: IWeatherReport
  ) {
    this.card = {
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      themeColor: "0076D7",
      summary: "DailyNewsBot",
      sections: [
        {
          activityTitle: "Weather today",
          activitySubtitle: "On Curitiba",
          activityImage: botImageUrl,
          markdown: true,
          facts: [
            {
              name: "Weather today",
              value: `${weatherReport.main}, ${weatherReport.temp} °C`,
            },
            {
              name: "Min",
              value: `${weatherReport.min} °C`,
            },
            {
              name: "Max",
              value: `${weatherReport.max} °C`,
            },
            {
              name: "@ciant_BR",
              value: message,
            },
          ],
        },
      ],
    };
  }
}
