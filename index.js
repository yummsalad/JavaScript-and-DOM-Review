import DATA from './database.json' assert { type: "json" };

let campCards = document.querySelector('#cards-container');
let campList = document.querySelector('.campsites-list');

// Create a function that appends an <a> for each campsite to the campList element.
// The <a> should link to the campsite card with a hashlink.
// Inside the <a> should be text that has the campsite name. 

// Append each link to the campList element. 

function makeList (DATA) {
    
for(let i = 0; i < DATA.campsites.length; i++){

    let a = document.createElement("a");
    a.innerText= DATA.campsites[i].siteName;
    a.href= "#" + DATA.campsites[i].id;

    //console.log(DATA.campsites[i]);

    campList.appendChild(a);
}

}

makeList(DATA);


// Create a funtion that creates a <div> for each campsite. 
// Each div should have a class of "card". 
// Each div should have an id attribute that is the ID of the campsite.

// Append each <div> to the campCards element. 

function makeCards (DATA) {
    
for(let i = 0; i < DATA.campsites.length; i++){

    let div = document.createElement("div");
    div.className = "card";
    div.id = DATA.campsites[i].id;

    campCards.appendChild(div);

}

}

makeCards(DATA);

// Create a funtion that creates a <div> for each campsite and adds it to the
// correct campsite card. 

// The <div> should contain a <h3> tag and an <img>
//  The H3 tag should contain the campsite name. 
// The image tag should have a class of "mainImg"
// and should have a src attribute that is taken from the image field.

function makeHeader(DATA){
    
for(let i = 0; i < DATA.campsites.length; i++){

    let div = document.createElement("div");
    let card = document.querySelector("#"+DATA.campsites[i].id);
    let h3 = document.createElement("h3");
    let img = document.createElement("img");

    h3.innerText = DATA.campsites[i].siteName;

    img.className = "mainImg";
    img.src = DATA.campsites[i].image;

    div.appendChild(h3);
    div.appendChild(img);

    card.appendChild(div);

}


}

makeHeader(DATA);


// Create a function that creates a <div> for each campsite and adds it to the
// correct campsite card. 

// The div should contain a <h4> and a <p>. 
// The H4 should be set to "Location".
// The P tag should contain the full address of the campsite. 

function makeLocation(DATA){
    
    for(let i=0 ; i < DATA.campsites.length; i++){

        let div = document.createElement("div");
        let card = document.querySelector("#"+DATA.campsites[i].id);
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        let loc = DATA.campsites[i].location;

        h4.innerText = "location";
        p.innerText = loc.address + ", " + loc.city + ", " + loc.state + ", " + loc.zip;

        div.appendChild(h4);
        div.appendChild(p);

        card.appendChild(div);

    }

}

makeLocation(DATA);


// Create a function that adds the contact information
// for each campsite's card.

// The phone number should call the number when clicked. 
// The email should open an email client when clicked.

function makeContact(DATA) {

    for (let i = 0; i < DATA.campsites.length; i++){

        let div = document.createElement("div");
        let card = document.querySelector("#"+DATA.campsites[i].id);

        let pNum = DATA.campsites[i].contact.phoneNumber;
        let eAddr = DATA.campsites[i].contact.emailAddress;

        let aNumber = document.createElement("a");
        let aEmail = document.createElement("a");

        aNumber.innerText = pNum;
        aNumber.href = "tel:" + pNum;

        aEmail.innerText = eAddr;
        aEmail.href = "mailTo:" + eAddr;

        div.style.display = "flex";
        div.style.gap = "10px";

        div.appendChild(aNumber);
        div.appendChild(aEmail);
        card.appendChild(div);

    }

};

makeContact(DATA);


// Create a function that adds the description of the site
// for each campsite's card.

 function makeDescription(DATA) {

    for(let i = 0; i < DATA.campsites.length; i++){

        let div = document.createElement("div");
        let card = document.querySelector("#"+DATA.campsites[i].id);
        
        div.innerHTML += `<h4>Description</h4>`;
        div.innerHTML += `<p>${DATA.campsites[i].description}</p>`;

        // let desc = document.createElement("p");
        // desc.innerText = DATA.campsites[i].description;
        //div.appendChild(desc);
        card.appendChild(div);

    }
    //dont forget to do heem 
    //innerHTML in this one

 };

 makeDescription(DATA);

// Create a function that adds the Amenities of the site
// to each campsite's card.

// This should be a <div> with a h3 tag and a <ul>. 

function makeAmenities(DATA) {

    for(let i = 0; i < DATA.campsites.length; i++){

        let card = document.querySelector("#"+DATA.campsites[i].id);

        function innerAmenities(){
            
            let string = ''
            
            for(let j=0; j < DATA.campsites[i].amenities.length; j++){
                
                string += `<li>${DATA.campsites[i].amenities[j]}</li>` 
             }

             //console.log(string);
             return string;
        } 

        card.innerHTML += `
            <div><h4>Amenities</h4>
            <ul>${innerAmenities()}
            </ul>`;

           
    }

};

makeAmenities(DATA);

// Create a function that adds the Reserve Now button of the site
// to each campsite's card.

// This should be a <button> that takes the user to the reservation URL.  

function makeButton(DATA) {

    for(let i=0; i <DATA.campsites.length; i++){

        let card = document.querySelector("#"+DATA.campsites[i].id);

        let resURL = DATA.campsites[i].reservationURL;

        if (resURL){
        card.innerHTML += `<a href="${resURL}"><button>Reserve Now!</button></a>`;
        }
    }

};

makeButton(DATA);


// Create a function that adds the reviews of the site
// to each campsite's card.

// This should be a <div> with an h4 and a <div> of reviews. 
// The div containing reviews should have an ID of 'reviews'. 

// Each review should...
// Use a emoji to represent the number of stars given in each review.
// return a p tag of the review message.
// append a p tag of the reviewer's username. 
// append a p tag of when it was reviewed. 
function makeReviews(DATA) {

    for(let i=0; i < DATA.campsites.length; i++){

        let card = document.querySelector("#"+DATA.campsites[i].id);
        let reviews = DATA.campsites[i].reviews;
        
        card.innerHTML += `<div><h4>Reviews</h4>`

        
        for(let j=0; j < reviews.length; j++){
            let stars = reviews[j].reviewStars;

            card.innerHTML += `<div>`; //open  div for single review
            
            //to print out review stars
            for (let k=0; k < stars; k++){
                 card.innerHTML += `⭐`;
            }

            //dates
            let date = reviews[j].submittedOn;
            card.innerHTML += `<p>submitted on: ${date}</p>`;

            //reviewer user name
            let username = reviews[j].username;
            card.innerHTML += `<p>${username}: </p>`;

            //reviewer user name
            let message = reviews[j].message;
            card.innerHTML += `<p>${message}</p>`;



            card.innerHTML += `_____________</div>` //close div single review
        }

        card.innerHTML += `</div>`; //close outter div for reviews

    }

};

makeReviews(DATA);


