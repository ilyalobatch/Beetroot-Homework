const API_KEY = "7a4aabbe";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const searchForm = document.querySelector(".search-form");
const paginationContainer = document.querySelector(".pagination-container");
const searchResultsContainer = document.querySelector(".search-results");
const detailsContainer = document.querySelector(".details-container");

const fetchData = async (query, type, page = 1) => {
  const response = await fetch(
    `${API_URL}&s=${query}&type=${type}&page=${page}`
  );

  return response.json();
};

const fetchDetails = async (id) => {
  const response = await fetch(`${API_URL}&i=${id}`);

  return response.json();
};

const getFormValues = () => {
  const formData = new FormData(searchForm);

  return {
    title: formData.get("title"),
    type: formData.get("type"),
  };
};

const createElementWithProps = (tagName, propNames, propValues) => {
  const element = document.createElement(tagName);

  propNames.forEach((property, index) => {
    element[property] = propValues[index];
  });

  return element;
};

const renderSearchItem = (itemData) => {
  const item = document.createElement("div");
  item.classList.add("search-results-item");

  if (!itemData) {
    return item;
  }

  const image = createElementWithProps("img", ["src"], [itemData?.Poster]);
  const title = createElementWithProps("h3", ["innerText"], [itemData?.Title]);

  const itemMeta = createElementWithProps(
    "div",
    ["className"],
    ["search-results-item__meta"]
  );

  const type = createElementWithProps("span", ["innerText"], [itemData?.Type]);
  const year = createElementWithProps("span", ["innerText"], [itemData?.Year]);
  const details = createElementWithProps(
    "button",
    ["innerText", "type"],
    ["Details", "button"]
  );
  details.addEventListener("click", () =>
    fetchAndLoadDetails(itemData?.imdbID)
  );

  itemMeta.append(type, year, details);

  item.append(image, title, itemMeta);

  return item;
};

const prepareSearchResults = (data) => {
  const { Search, totalResults, Error: error } = data;

  return {
    searchResultElements: error
      ? []
      : Search.map((dataItem) => renderSearchItem(dataItem)),
    totalResults,
    error,
  };
};

const paginationBtn = (page) => {
  const paginationBtn = createElementWithProps("button", ["type"], ["button"]);

  paginationBtn.innerText = page;

  paginationBtn.addEventListener("click", async () => {
    const searchProps = getFormValues();
    await fetchAndLoadData(searchProps.title, searchProps.type, page);
  });

  return paginationBtn;
};

const preparePagination = (totalResults) => {
  const availablePagesCount = Math.ceil(totalResults / 10);
  const availablePages = [...Array(availablePagesCount + 1).keys()].slice(1);

  const paginationItems = availablePages.map((page) => paginationBtn(page));

  paginationContainer.innerHTML = "";
  paginationContainer.append(...paginationItems);
};

const fetchAndLoadData = async (query, type, page) => {
  if (!searchResultsContainer) {
    return;
  }

  searchResultsContainer.innerHTML = "";
  detailsContainer.innerHTML = "";

  if (page < 2) {
    paginationContainer.innerHTML = "";
  }

  const data = await fetchData(query, type, page);
  const { searchResultElements, totalResults, error } =
    prepareSearchResults(data);

  if (!error && searchResultElements.length) {
    searchResultsContainer.append(...searchResultElements);
    preparePagination(totalResults);
  } else {
    paginationContainer.innerHTML = "";
  }
};

const fetchAndLoadDetails = async (id) => {
  const data = await fetchDetails(id);

  detailsContainer.innerHTML = "";

  if (!data?.Error) {
    const dataProps = Object.keys(data);

    const infoElements = dataProps.map((prop) => {
      if (typeof data[prop] !== "string") {
        return;
      }

      const tableRow = document.createElement("tr");
      const property = createElementWithProps("td", ["innerText"], [prop]);
      const propDescription = createElementWithProps(
        "td",
        ["innerText"],
        [data[prop]]
      );

      tableRow.append(property, propDescription);

      return tableRow;
    });

    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    tableBody.append(...infoElements.filter((item) => item !== undefined));
    table.append(tableBody);

    detailsContainer.append(table);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchProps = getFormValues();
    fetchAndLoadData(searchProps.title, searchProps.type, 1);
  });
});
