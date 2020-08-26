"use strict"
// DINO DATA //
const dinos = [
    {
      id: 'dino1',
      name: 'Milo',
      type: 'T Rex',
      age: 100,
      owner: 'Autumn',
      adventures: [],
      health: 92,
      imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
    },
    {
      id: 'dino2',
      name: 'Sage',
      type: 'Velociraptor',
      age: 1,
      owner: 'Autumn',
      adventures: [],
      health: 1,
      imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
    },
    {
      id: 'dino3',
      name: 'Koda',
      type: 'stegosaurus',
      age: 55,
      owner: 'Autumn',
      adventures: [],
      health: 0,
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
    },
    {
      id: 'dino4',
      name: 'Loki',
      type: 'Brontosaurus',
      age: 100,
      owner: 'Autumn',
      adventures: [],
      health: 100,
      imageUrl: 'https://lh3.googleusercontent.com/proxy/_rJSL88ErOEvgHl5SInWOEolOdikwIMcKWPv9iqZzt3IUkD33WdG6d9qd8TmNJFSiszTXm7JeGQPocmB_BZErKxt__25LOpW75dmnVuy0nuY0PatX2cIYA-C'
    },
    {
      id: 'dino5',
      name: 'Pepper',
      type: 'Spinosaurus',
      age: 100,
      owner: 'Autumn',
      adventures: [],
      health: 75,
      imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
    },
    {
      id: 'dino6',
      name: 'Aspen',
      type: 'Talarurus',
      age: 100,
      owner: 'Autumn',
      adventures: [],
      health: 55,
      imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
    },
    {
      id: 'dino7',
      name: 'Shadow',
      type: 'Triceratops',
      age: 100,
      owner: 'Autumn',
      adventures: [],
      health: 0,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
    },
    {
      id: 'dino8',
      name: 'Nova',
      type: 'Pterodactyl',
      age: 10,
      owner: 'Autumn',
      adventures: [],
      health: 10,
      imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
    },
    {
      id: 'dino9',
      name: 'Gizmo',
      type: 'brontosaurus',
      age: 22,
      owner: 'Autumn',
      adventures: [],
      health: 22,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
    }
  ];
  
//   ADVENTURE DATA //
  const adventures = [
    {
      id: 'adventure1',
      title: 'BRAWL',
      healthHit: 50
    },
    {
      id: 'adventure2',
      title: 'Cave exploration',
      healthHit: 10
    },
    {
      id: 'adventure3',
      title: 'Ropes course',
      healthHit: 13
    },
    {
      id: 'adventure4',
      title: 'Playing in traffic',
      healthHit: 3
    },
    {
      id: 'adventure5',
      title: 'Baking',
      healthHit: 70
    },
    {
      id: 'adventure6',
      title: 'Welding',
      healthHit: 4
    },
    {
      id: 'adventure7',
      title: 'Underwater Basket Weaving',
      healthHit: 99
    },
    {
      id: 'adventure8',
      title: 'Surfing',
      healthHit: 39
    },
    {
      id: 'adventure9',
      title: 'Fishing',
      healthHit: 23
    },
    {
      id: 'adventure10',
      title: 'Shot from a cannon',
      healthHit: 60
    }
  ];
 
  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 }
  const buildProductCards = (arr) => {
    let domString = "";
  
    for (let i = 0; i < arr.length; i++) {
      domString += `<div class="card m-4 navCustom shadow" style="width: 18rem;">
                          <img src="${
                            arr[i].imageUrl
                          }" class="card-img-top" alt="${arr[i].name}">
                          <div class="card-body">
                              <h5 class="product-name">${arr[i].name}</h5>
                              <p class="product-health">$${arr[i].health}</p>
                               
                          </div>
                      </div>`;
    }
  
    printToDom("productContainer", domString);
  };




  
  // const petButton = document.getElementById("pet-btn");
  // const adventureButton = document.getElementById("adventure-btn");
  // const feedButton = document.getElementById("feed-btn");
  // const deleteButton = document.getElementById("all-btn");
  
  // const getPets = document.getElementsByClassName("pet");
  
  // const sortPets = (petType) => {
  //   for (let l = 0; l < getPets.length; l++) {
  //     if (getPets[l].classList.contains(petType)) {
  //       getPets[l].style.display = "";
  //     } else {
  //       getPets[l].style.display = "none";
  //     }
  //   }
  // };
  
  // dogButton.addEventListener("click", function() { sortPets('Dog'); });
  // catButton.addEventListener("click", function () { sortPets('Cat'); });
  // dinoButton.addEventListener("click", function () { sortPets('Dino'); });
  // allButton.addEventListener("click", function () { sortPets('pet')});
















  const init= () => {
    buildProductCards(dinos);
  }; 


  init();