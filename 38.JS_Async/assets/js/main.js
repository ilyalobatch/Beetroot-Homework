const API_KEY = "7a4aabbe";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const fetchData = async (query, type, page = 1) => {
  return await fetch(`${API_URL}&s=${query}&type=${type}&page=${page}`).then(
    (response) => response.json()
  );
};

const fetchDetails = async (id) => {
  return await fetch(`${API_URL}&i=${id}`).then((response) => response.json());
};

const getSearchForm = () => {
  return document.querySelector(".search-form");
};

const getPaginationContainer = () => {
  return document.querySelector(".pagination-container");
};

const getSearchResultsContainer = () => {
  return document.querySelector(".search-results");
};

const getDetailsContainer = () => {
  return document.querySelector(".details-container");
};

const getFormValues = (formEl) => {
  const formData = new FormData(formEl);

  return {
    title: formData.get("title"),
    type: formData.get("type"),
  };
};

const getSearchProps = () => {
  const formValues = getFormValues(getSearchForm());

  return {
    query: formValues.title,
    type: formValues.type,
  };
};

const createElementWithProp = (tagName, propNames, propValues) => {
  const element = document.createElement(tagName);

  propNames.forEach((property, index) => {
    element[property] = propValues[index];
  });

  return element;
};

const searchResultItem = (itemData) => {
  const item = document.createElement("div");
  item.classList.add("search-results-item");

  if (!itemData) {
    return item;
  }

  const image = createElementWithProp("img", ["src"], [itemData?.Poster]);
  const title = createElementWithProp("h3", ["innerText"], [itemData?.Title]);

  const itemMeta = createElementWithProp(
    "div",
    ["className"],
    ["search-results-item__meta"]
  );

  const type = createElementWithProp("span", ["innerText"], [itemData?.Type]);
  const year = createElementWithProp("span", ["innerText"], [itemData?.Year]);
  const details = createElementWithProp(
    "button",
    ["innerText", "type"],
    ["Details", "button"]
  );
  details.addEventListener("click", () =>
    fetchAndLoadDetails(itemData?.imdbID)
  );

  itemMeta.append(...[type, year, details]);

  item.append(...[image, title, itemMeta]);

  return item;
};

const prepareSearchResults = (data) => {
  const { Search, totalResults, Error: error } = data;

  return {
    searchResultElements: error
      ? []
      : Search.map((dataItem) => searchResultItem(dataItem)),
    totalResults,
    error,
  };
};

const paginationBtn = (page) => {
  const searchProps = getSearchProps();
  const paginationBtn = document.createElement("button");

  paginationBtn.innerText = page;

  paginationBtn.addEventListener("click", () =>
    fetchAndLoadData(searchProps.query, searchProps.type, page)
  );

  return paginationBtn;
};

const preparePagination = (totalResults) => {
  const availablePagesCount = Math.ceil(totalResults / 10);
  const availablePages = [...Array(availablePagesCount + 1).keys()].slice(1);

  const paginationContainer = getPaginationContainer();
  const paginationItems = availablePages.map((page) => paginationBtn(page));

  paginationContainer.innerHTML = "";
  paginationContainer.append(...paginationItems);
};

const fetchAndLoadData = async (query, type, page) => {
  const searchResultsContainer = getSearchResultsContainer();
  const detailsContainer = getDetailsContainer();

  searchResultsContainer.innerHTML = "";
  detailsContainer.innerHTML = "";

  const paginationContainer = getPaginationContainer();

  const data = await fetchData(query, type, page);
  const { searchResultElements, totalResults, error } =
    prepareSearchResults(data);

  if (!searchResultsContainer) {
    return;
  }

  if (error) {
    searchResultsContainer.innerHTML = error;
    paginationContainer.innerHTML = "";
  } else {
    searchResultsContainer.innerHTML = "";
    searchResultsContainer.append(...searchResultElements);
    preparePagination(totalResults);
  }
};

const fetchAndLoadDetails = async (id) => {
  const data = await fetchDetails(id);
  const detailsContainer = getDetailsContainer();

  detailsContainer.innerHTML = "";

  if (!data?.Error) {
    const dataProps = Object.keys(data);
    const dataValues = Object.values(data);

    const infoElements = dataProps.map((prop, index) => {
      if (typeof dataValues[index] !== "string") {
        return;
      }

      const tableRow = document.createElement("tr");
      const property = createElementWithProp("td", ["innerText"], [prop]);
      const propDescription = createElementWithProp(
        "td",
        ["innerText"],
        [dataValues[index]]
      );

      tableRow.append(...[property, propDescription]);

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
  const searchForm = getSearchForm();

  searchForm.addEventListener("submit", () => {
    const searchProps = getSearchProps(searchForm);
    fetchAndLoadData(searchProps.query, searchProps.type, 1);
  });
});
