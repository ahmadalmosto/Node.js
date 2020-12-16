const express = require("express");

const app = express();
const exphbs = require("express-handlebars");
const axios = require("axios");
const path = require("path");
const PORT = process.env.PORT || 3000;
const API_KEY = require("./sources/keys.json").API_KEY;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: false,
  })
);

app.set("view engine", "handlebars");

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;

  if (cityName) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`
      )
      .then((response) => {
        res.render("result", {
          weatherText: `The temperature in ${cityName} is ${response.data.main.temp} °C`,
          description: response.data.weather[0].description,
          humidity: `The humidity is ${response.data.main.humidity}`,
          wind: `Wind speed ${response.data.wind.speed}`,
        });
      })
      .catch((err) => {
        res.render("error", {
          errorText: `${err.response.status} ${err.response.statusText}`,
        });
      });
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`we are listening on port ${PORT}`);
});
