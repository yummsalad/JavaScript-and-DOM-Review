import DATA from './database.json' assert { type: "json" };

let campCards = document.querySelector('#cards-container');
let campList = document.querySelector('.campsites-list');

// Create a function that appends an <a> for each campsite to the campList element.
// The <a> should link to the campsite card with a hashlink.
// Inside the <a> should be text that has the campsite name. 

// Append each link to the campList element. 

function makeList (DATA) {
  
    
}

makeList(DATA);


// Create a funtion that creates a <div> for each campsite. 
// Each div should have a class of "card". 
// Each div should have an id attribute that is the ID of the campsite.

// Append each <div> to the campCards element. 

function makeCards (DATA) {
    
}

makeCards(DATA);

// Create a funtion that creates a <div> for each campsite and adds it to the
// correct campsite card. 

// The <div> should contain a <h3> tag and an <img>
//  The H3 tag should contain the campsite name. 
// The image tag should have a class of "mainImg"
// and should have a src attribute that is taken from the image field.

function makeHeader(DATA){
    

}

makeHeader(DATA);


// Create a function that creates a <div> for each campsite and adds it to the
// correct campsite card. 

// The div should contain a <h4> and a <p>. 
// The H4 should be set to "Location".
// The P tag should contain the full address of the campsite. 

function makeLocation(DATA){
    

}

makeLocation(DATA);


// Create a function that adds the contact information
// for each campsite's card.

// The phone number should call the number when clicked. 
// The email should open an email client when clicked.

function makeContact(DATA) {

};

makeContact(DATA);


// Create a function that adds the description of the site
// for each campsite's card.

 function makeDescription(DATA) {

 };

 makeDescription(DATA);

// Create a function that adds the Amenities of the site
// to each campsite's card.

// This should be a <div> with a h3 tag and a <ul>. 

function makeAmenities(DATA) {

};

makeAmenities(DATA);

// Create a function that adds the Reserve Now button of the site
// to each campsite's card.

// This should be a <button> that takes the user to the reservation URL.  

function makeButton(DATA) {

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

};

makeReviews(DATA);


