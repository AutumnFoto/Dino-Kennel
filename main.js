"use strict";
// DINO DATA //
let dinos = [
  {
    id: "dino1",
    name: "Milo",
    type: "T Rex",
    age: 100,
    owner: "Autumn",
    adventures: [],
    health: 92,
    imageUrl:
      "https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png",
  },
  {
    id: "dino2",
    name: "Sage",
    type: "Velociraptor",
    age: 1,
    owner: "Autumn",
    adventures: [],
    health: 1,
    imageUrl: "https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png",
  },
  {
    id: "dino3",
    name: "Koda",
    type: "stegosaurus",
    age: 55,
    owner: "Autumn",
    adventures: [],
    health: 0,
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg",
  },
  {
    id: "dino4",
    name: "Loki",
    type: "Brontosaurus",
    age: 100,
    owner: "Autumn",
    adventures: [],
    health: 100,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/02/04/09/21/dinosaur-3129391__340.png",
  },
  {
    id: "dino5",
    name: "Pepper",
    type: "Spinosaurus",
    age: 100,
    owner: "Autumn",
    adventures: [],
    health: 75,
    imageUrl:
      "https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2",
  },
  {
    id: "dino6",
    name: "Aspen",
    type: "Talarurus",
    age: 100,
    owner: "Autumn",
    adventures: [],
    health: 55,
    imageUrl:
      "https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226",
  },
  {
    id: "dino7",
    name: "Shadow",
    type: "Triceratops",
    age: 100,
    owner: "Autumn",
    adventures: [],
    health: 0,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg",
  },
  {
    id: "dino8",
    name: "Nova",
    type: "Pterodactyl",
    age: 10,
    owner: "Autumn",
    adventures: [],
    health: 10,
    imageUrl: "https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg",
  },
  {
    id: "dino9",
    name: "Gizmo",
    type: "brontosaurus",
    age: 22,
    owner: "Autumn",
    adventures: [],
    health: 22,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD",
  },
];

//   ADVENTURE DATA //
const adventures = [
  {
    id: "adventure1",
    title: "BRAWL",
    healthHit: 50,
  },
  {
    id: "adventure2",
    title: "Cave exploration",
    healthHit: 10,
  },
  {
    id: "adventure3",
    title: "Ropes course",
    healthHit: 13,
  },
  {
    id: "adventure4",
    title: "Playing in traffic",
    healthHit: 3,
  },
  {
    id: "adventure5",
    title: "Baking",
    healthHit: 70,
  },
  {
    id: "adventure6",
    title: "Welding",
    healthHit: 4,
  },
  {
    id: "adventure7",
    title: "Underwater Basket Weaving",
    healthHit: 99,
  },
  {
    id: "adventure8",
    title: "Surfing",
    healthHit: 39,
  },
  {
    id: "adventure9",
    title: "Fishing",
    healthHit: 23,
  },
  {
    id: "adventure10",
    title: "Shot from a cannon",
    healthHit: 60,
  },
];

// PRODUCT CARDS //

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildProductCards = (arr) => {
  let kennelDomString = "";
  let hospitalDomString = "";
  let graveyardDomString = "";

  for (let i = 0; i < arr.length; i++) {
    let dinoDomString = "";
    dinoDomString = `<div id="${arr[i].id}" class="card" style="width: 18rem;">
                <img src=${arr[i].imageUrl} class="card-img-top" alt="${arr[i].name}">
                <div class="card-body">
                <h5 class="card-title">${arr[i].name}</h5>
                <p class="card-text"> ${arr[i].health}</p>
               <a class="btn btn-primary" href="#" id="feed" role="button">Feed</a>
                <button class="btn btn-primary" id="pet" type="submit">Pet</button>
                <input class="btn btn-primary dinoCard" type="submit" value="Remove">
               <input class="btn btn-primary" type="reset" value="Adventure">

                </div>
                </div>`;
    if (arr[i].health < 1) {
      graveyardDomString += dinoDomString;
    } else if (arr[i].health <= 50) {
      hospitalDomString += dinoDomString;
    } else {
      kennelDomString += dinoDomString;
    }
  }

  printToDom("Graveyard", graveyardDomString);
  printToDom("Hospital", hospitalDomString);
  printToDom("Kennel", kennelDomString);
};

// END OF PRODUCT CARDS//

// ADD DINO FORM //
$("#addDino").click(() => {
  let newDino = {};

  newDino.id = `dino${dinos.length}+1`;
  newDino.name = $("#NameInput").val();
  newDino.type = $("#TypeInput").val();
  newDino.age = $("#AgeInput").val();
  newDino.owner = $("#OwnerInput").val();
  newDino.adventures = [];
  newDino.health = 55;
  newDino.imageURL = $("#ImageInput").val();

  dinos.push(newDino);
  buildProductCards(dinos);
});

// $(".dinoCard").click(function(){
//   let dinoCard = $(this).parentElement.parentElement;

//   dinos = dinos.filter(dino => dino.id != dinoCard.id);

//   buildProductCards(dinos);
// });


$(document).ready(function(){
$("#feed").click(function(){
  alert("Thank you for feeding me!");
});
});

$(document).ready(function(){
$("#pet").click(function(){
  alert("Thank you for petting me!");
});
});




const init = () => {
  buildProductCards(dinos);
};

init();
