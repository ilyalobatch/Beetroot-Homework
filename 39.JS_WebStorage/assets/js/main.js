const API_KEY = "1ee08fee54c092fa533c1c8db5b1ff95";
const WEATHER_API_URL = `http://api.openweathermap.org/data/3.0/onecall?appid=${API_KEY}`;
const WEATHER_ICON_API_URL = `https://openweathermap.org/img/wn/`;

const WEATHER_STORAGE_KEY = "weatherData";

const citySelect = document.querySelector('select[name="city"]');
const weatherContainer = document.querySelector(".weather-container");
const detailsContainer = document.querySelector(".details-container");

const saveToStorage = (key = WEATHER_STORAGE_KEY, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key = WEATHER_STORAGE_KEY) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

const fetchData = async (url) => {
  const response = await fetch(url);

  return response.json();
};

const fetchWeatherData = async (lat, lon) => {
  return fetchData(`${WEATHER_API_URL}&lat=${lat}&lon=${lon}&limit=5`);
};

const createElementWithProps = (tagName, propNames, propValues) => {
  const element = document.createElement(tagName);

  propNames.forEach((property, index) => {
    element[property] = propValues[index];
  });

  return element;
};

const createWeatherWidget = (weather) => {
  const container = createElementWithProps(
    "div",
    ["className"],
    ["weather-widget"]
  );
  const title = createElementWithProps("h2", ["innerText"], [weather.main]);
  const icon = createElementWithProps(
    "img",
    ["src"],
    [`${WEATHER_ICON_API_URL}${weather.icon}@2x.png`]
  );
  const description = createElementWithProps(
    "p",
    ["innerText"],
    [weather.description]
  );

  container.append(title, icon, description);

  return container;
};

const generateTableRow = (data, prop) => {
  const tableRow = document.createElement("tr");
  const formattedPropName = prop.replace("_", " ").toUpperCase();
  const property = createElementWithProps(
    "td",
    ["innerText"],
    [formattedPropName]
  );
  let propDescription;

  if (Array.isArray(data[prop])) {
    const [weather] = data[prop];
    const widget = createWeatherWidget(weather);
    weatherContainer.innerHTML = "";
    weatherContainer.append(widget);

    return;
  }

  propDescription = createElementWithProps("td", ["innerText"], [data[prop]]);

  tableRow.append(property, propDescription);

  return tableRow;
};

const mapAndLoadWeatherProps = (data) => {
  if (!data) {
    return;
  }

  const weatherProps = Object.keys(data);
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  const infoElements = weatherProps.map((prop) => generateTableRow(data, prop));

  tableBody.append(...infoElements.filter((item) => item !== undefined));
  table.append(tableBody);

  detailsContainer.append(table);
};

const loadAndDisplayData = async (value) => {
  const [lat, lon] = value.split(", ");
  const data = await fetchWeatherData(lat, lon).catch((error) =>
    console.log(error)
  );

  mapAndLoadWeatherProps(data?.current);
  saveToStorage(WEATHER_STORAGE_KEY, {
    city: [lat, lon],
    data: data?.current,
    lastUpdateTime: new Date(),
  });
};

const handleOnChangeSelect = async (event) => {
  detailsContainer.innerHTML = "";

  await loadAndDisplayData(event.target.value);
};

const checkForDataUpdate = (lastUpdateTime) => {
  let lastUpdateTimeDateObject = new Date(lastUpdateTime);
  lastUpdateTimeDateObject.setHours(lastUpdateTimeDateObject.getHours() + 2);

  return lastUpdateTimeDateObject.getTime() < new Date().getTime();
};

document.addEventListener("DOMContentLoaded", async () => {
  const savedData = getFromStorage();

  if (!savedData || checkForDataUpdate(savedData.lastUpdateTime)) {
    await loadAndDisplayData(citySelect.value);
  } else {
    citySelect.value = savedData.city.join(", ");
    mapAndLoadWeatherProps(savedData.data);
  }

  citySelect.addEventListener("change", handleOnChangeSelect);
});
