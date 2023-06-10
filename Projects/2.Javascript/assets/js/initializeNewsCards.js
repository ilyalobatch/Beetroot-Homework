const news = [
  {
    postImage: "./assets/imgs/news_cards/alja-post.jpg",
    postTitle: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
    postText:
      "Free directories: directories are perfect for customers that are searching for",
    authorImage: "./assets/imgs/news_cards/alja-img.jpg",
    authorName: "ALJA BRUN",
    postDate: "20 Jan 2020",
  },
  {
    postImage: "./assets/imgs/news_cards/dominick-post.jpg",
    postTitle: "EFFECTIVE ADVERTISING POINTERS.",
    postText: "Having a home based business is a wonderful asset to your life",
    authorImage: "./assets/imgs/news_cards/dominick-img.jpg",
    authorName: "DOMINIC FREEMAN",
    postDate: "13 Dec 2019",
  },
  {
    postImage: "./assets/imgs/news_cards/alice-post.jpg",
    postTitle: "HYPNOTIZE YOURSELF INTO THE GHOST.",
    postText: "There are many things that are important to catalog design",
    authorImage: "./assets/imgs/news_cards/alice-img.jpg",
    authorName: "ALICE WARD",
    postDate: "30 Nov 2019",
  },
];

const newsSet = [news, news, news, news, news].flat();

const generateNewsSlide = (newsData, prefix, element) => {
  const slide = element.cloneNode(true);
  const postImage = slide.querySelector(`${prefix}-imagebox img`);
  if (postImage) {
    postImage.src = newsData.postImage;
    postImage.alt = newsData.postTitle;
  }

  const postTitle = slide.querySelector(`${prefix}-title`);
  if (postTitle) {
    postTitle.innerText = newsData.postTitle;
  }

  const postText = slide.querySelector(`${prefix}-text`);
  if (postText) {
    postText.innerText = newsData.postText;
  }

  const authorImage = slide.querySelector(`${prefix}-author-imagebox img`);
  if (authorImage) {
    authorImage.src = newsData.authorImage;
    authorImage.alt = newsData.postTitle;
  }

  const authorName = slide.querySelector(`${prefix}-author-name`);
  if (authorName) {
    authorName.innerText = newsData.authorName;
  }

  const postDate = slide.querySelector(`${prefix}-author-date`);
  if (postDate) {
    postDate.innerText = newsData.postDate;
  }

  return slide;
};

export const renderNewsCards = () => {
  const cardPrefix = ".monticello-news-card";
  const newsContainer = document.querySelector(".monticello-news-wrapper");
  const newsCardEl = document.querySelector(`${cardPrefix}`);

  const newsSlides = newsSet.map((newsData) => {
    return generateNewsSlide(newsData, cardPrefix, newsCardEl);
  });

  newsContainer.innerHTML = "";
  newsContainer.append(...newsSlides);
};
