const showingResultsDiv = document.querySelector("#showingResultsDiv");

//Display popular/toprated
function displayPopTop(list) {
  console.log(list);
  showingResultsDiv.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const titel = list.results[i].title;
    const poster = list.results[i].poster_path;
    const releaseDate = list.results[i].release_date;

    const titelEl = document.createElement("h1");
    const posterImg = document.createElement("img");
    const releaseDateEl = document.createElement("p");
    const boxDiv = document.createElement("div");

    const posterPath = `https://image.tmdb.org/t/p/w400/` + poster;

    titelEl.innerText = titel;
    posterImg.src = posterPath;
    releaseDateEl.innerText = releaseDate;

    boxDiv.append(posterImg, titelEl, releaseDateEl);
    showingResultsDiv.append(boxDiv)
  }
}

//Display searched movie
function displaysearchedmovie(list) {
  console.log(list);
  showingResultsDiv.innerHTML = "";
  if (list.results.length === 0) {
    const h1El = document.createElement("h1");
    h1El.innerText = "None found, check spelling";
    showingResultsDiv.append(h1El);
  } else {
    for (let i = 0; i < list.results.length; i++) {
      const titel = list.results[i].original_title;
      const poster = list.results[i].poster_path;
      const about = list.results[i].overview;

      const titelEl = document.createElement("h1");
      const posterImg = document.createElement("img");
      const aboutEl = document.createElement("p");
      const boxDiv = document.createElement("div");

      const posterPath = `https://image.tmdb.org/t/p/w400/` + poster;

      titelEl.innerText = titel;
      posterImg.src = posterPath;
      aboutEl.innerText = about;

      boxDiv.append(posterImg, titelEl, aboutEl);
      showingResultsDiv.append(boxDiv);
    }
  }
}

//Display searched person
function displaysearchedperson(list) {
  console.log(list);
  showingResultsDiv.innerHTML = "";
  if (list.results.length === 0) {
    const h1El = document.createElement("h1");
    h1El.innerText = "None found, check spelling";
    showingResultsDiv.append(h1El);
  } else {
    for (let i = 0; i < list.results.length; i++) {
      const titel = list.results[i].name;
      const poster = list.results[i].profile_path;
      const about = list.results[i].known_for_department;

      const titelEl = document.createElement("h1");
      const posterImg = document.createElement("img");
      const aboutEl = document.createElement("p");
      const boxDiv = document.createElement("div");

      const posterPath = `https://image.tmdb.org/t/p/w400/` + poster;

      titelEl.innerText = titel;
      posterImg.src = posterPath;
      aboutEl.innerText = about;

      boxDiv.append(posterImg, titelEl, aboutEl);
      showingResultsDiv.append(boxDiv);

      for (const knownFor of list.results[i].known_for) {
        if (knownFor.media_type === "movie") {
          const mediaMovie = "Movie: ";
          const titelMovie = knownFor.title;

          const showmovie = document.createElement("p");
          showmovie.innerText = mediaMovie + titelMovie;
          boxDiv.append(showmovie);
        }
        if (knownFor.media_type === "tv") {
          const mediaTv = "Tv: ";
          const titelTv = knownFor.name;

          const showTv = document.createElement("p");
          showTv.innerText = mediaTv + titelTv;
          boxDiv.append(showTv);
        }
      }
    }
  }
}

export { displayPopTop, displaysearchedmovie, displaysearchedperson };
