// const API_KEY = "2f3779accfa2a556e22b539c4b32b52e";
import{displayPopTop, displaysearchedmovie, displaysearchedperson} from "./display.js"

//API attatched with url
function fetchmovieAPI(typeFormInput) {
  const urlMovie = `https://api.themoviedb.org/3/search/movie?query=${typeFormInput}&include_adult=false&language=en-US&api_key=2f3779accfa2a556e22b539c4b32b52e`;
  console.log(urlMovie);
  jasonfuncmovie(urlMovie)
}

function fetchpersonAPI(typeFormInput) {
  const urlPerson = `https://api.themoviedb.org/3/search/person?query=${typeFormInput}&include_adult=false&language=en-US&api_key=2f3779accfa2a556e22b539c4b32b52e`;
  console.log(urlPerson);
  jasonfuncperson(urlPerson)
}

function popmovie() {
  const urlPop = `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=2f3779accfa2a556e22b539c4b32b52e`;
  console.log(urlPop)
  jasonfunctoppop(urlPop)
}

function toprated(){
    const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=2f3779accfa2a556e22b539c4b32b52e`;
    console.log(urlTopRated)
    jasonfunctoppop(urlTopRated)
}


//json functions
function jasonfunctoppop(urlapi){
    fetch(urlapi)
    .then(handleResponse)
    .then(displayPopTop)
    .catch((err) => displayError("try again later"));
}

function jasonfuncperson(urlapi){
    fetch(urlapi)
    .then(handleResponse)
    .then(displaysearchedperson)
    .catch((err) => displayError("try again later"));
}

function jasonfuncmovie(urlapi){
    fetch(urlapi)
    .then(handleResponse)
    .then(displaysearchedmovie)
    .catch((err) => displayError("try again later"));
}

function handleResponse(response) {
    console.log(response);
    return response.json();
  }


//Error display
  function displayError(message) {
    console.log("error funktionen");
    const h1Ele = document.createElement("h1");
    h1Ele.innerText = message;
    showingResultsDiv.append(h1Ele);
  }

export{ fetchmovieAPI, fetchpersonAPI, popmovie, toprated }