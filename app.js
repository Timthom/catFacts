console.log("Hej html!");

const buttonClicked = document.getElementById("getNewCatFact");

buttonClicked.addEventListener('click', function (event) {
    //Här skriver vi vad som ska hända när vi klickar på knappen.
    //Vi anropar funktionen för att hämta kattfakta
    getRandomCatFacts();
    //Vi anropar funktionen för att hämta hundfakta
    getRandomDogFacts();
    //Vi anropar functionen för att hämta KanyeQuotes
    getKanyeQuotes();
    //Här anropar vi våran knappanimering
    buttonAnimation();

});

//Kattfakta-funktion
function getRandomCatFacts() {

    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let cat = response;
            console.log(cat);
            document.querySelector(".catFact").innerHTML =
                "😸 + 🐭 = 🍲 " + cat.fact;
        })
        .catch(function (error) {
            console.log("Error: " + error);
            document.querySelector(".catFact").innerHTML =
              "😿 " + "Sorry, vi kan inte hämta data just nu. Försök senare!";
    }
    )

}//Slut kattfakta

//Hundfakta funktion

function getRandomDogFacts() {

    fetch("https://dogapi.dog/api/v2/facts")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dog = response;
            console.log(dog);
            document.querySelector(".dogFact").innerHTML =
              "🐺 + 🦴 = 💩 " + dog.data[0].attributes.body;
    })
        .catch(function (error) {
            console.log("Error: " + error);
            document.querySelector(".dogFact").innerHTML =
              "🐺 " + "Sorry, vi kan inte hämta data just nu. Försök senare!";
    })
}

// Här är funktionen getKanyeQuotes
function getKanyeQuotes() {

    fetch("https://api.kanye.rest") 
        .then(function (response) {
            return response.json();
    })
        .then((response) => {
            let dataK = response;
            console.log(dataK);
            document.querySelector(".kayneQoutes").innerHTML =
              'Kanye says: "' + dataK.quote + '" 🙄';
        })
        .catch(function (error) {
            console.log("Error: " + error);
            document.querySelector(".kayneQoutes").innerHTML =
              "Kayne is out! Try later... 😵";
    })
}

//Knappanimeringsfunktion

function buttonAnimation() {
    let activeButton = document.querySelector("#getNewCatFact");
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}