const headerTitle = {
  headerTitle: "SIMPLE & MODERN",
  headerText: "WE MAKE THE WORLD BEAUTIFUL EVERYDAY",
};

const headerTitleSet = [
  headerTitle,
  headerTitle,
  headerTitle,
  headerTitle,
  headerTitle,
];

export const renderHeaderTitles = () => {
  const cardPrefix = ".monticello-header";
  const headerContainer = document.querySelector(`${cardPrefix}-content`);
  const headerTitleEl = document.querySelector(`${cardPrefix}-slide`);

  const headerTitleSlides = headerTitleSet.map((titleData) => {
    const slide = headerTitleEl.cloneNode(true);
    const headerTitle = slide.querySelector(`${cardPrefix}-title`);
    if (headerTitle) {
      headerTitle.innerText = titleData.headerTitle;
    }

    const headerText = slide.querySelector(`${cardPrefix}-text`);
    if (headerText) {
      headerText.innerText = titleData.headerText;
    }

    return slide;
  });

  headerContainer.innerHTML = "";
  headerContainer.append(...headerTitleSlides);
};
