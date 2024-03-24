
import{fetchmovieAPI, fetchpersonAPI, popmovie, toprated} from "./moduler/apikey.js"


//Form
const form = document.querySelector("form")

form.addEventListener("submit", handleForm)

function handleForm(event){
    event.preventDefault();

    const typeFormInput = document.querySelector("input").value;
    const radioNameInput= document.querySelector("#radioPerson").checked
    const radioMovieInput= document.querySelector("#radioMovie").checked

    console.log(typeFormInput, radioNameInput, radioMovieInput)

    if (radioNameInput== true){
        console.log("person")
        fetchpersonAPI(typeFormInput)
    }
    else if ( radioMovieInput== true){

        console.log("movie")
        fetchmovieAPI(typeFormInput)

    }
    
}

//Buttons Top Rated/Popular
const topButn = document.querySelector("#topButn")
topButn.addEventListener("click", (event) =>{
    console.log("tryckt på toprated")
    toprated();
})

const popButn = document.querySelector("#popButn")
popButn.addEventListener("click", (event) =>{
    console.log("tryckt på popular")
    popmovie()

})

//Footer
const footerinfo = document.querySelector("footer")
const footertext = document.createElement("p");
footertext.innerText= "TMBD";
footerinfo.append(footertext)