## Team Webhooks POC

### Usage

- Copy `.env.example` from the `env` folder and rename it to `.env.local`
- Customize parameters and keys as needed
    - MODE parameter: `test` will only output to console, `webhook` will send a POST request to the Webhook URL provided
    - MOCK_APIS: `true` will not call Twitter and OpenWeather APIs, instead it will send a hardcoded message  
- Run `npm install`
- Run `npm run local`