const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const songListElement = document.querySelector(".songs-list");

const renderItem = (listAuthor, listSong) => {
  const newListItem = document.createElement("li");

  newListItem.className = "songs-list-item";
  newListItem.innerHTML = `<b>${listAuthor}: </b><span>${listSong}</span>`;

  return newListItem;
};

if (songListElement) {
  playList.forEach((item) => {
    const newListItem = renderItem(item.author, item.song);
    songListElement.appendChild(newListItem);
  });
}
