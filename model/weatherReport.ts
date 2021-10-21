export interface IWeatherReport {
  main: string;
  description: string;
  temp: string;
  min: string;
  max: string;
  feelsLike: string;
}
export class WeatherReport implements IWeatherReport {
  constructor(
    main: string,
    description: string,
    temp: string,
    min: string,
    max: string,
    feelsLike: string
  ) {
    this.main = main;
    this.description = description;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.feelsLike = feelsLike;
  }
  main: string;
  description: string;
  temp: string;
  min: string;
  max: string;
  feelsLike: string;
}
