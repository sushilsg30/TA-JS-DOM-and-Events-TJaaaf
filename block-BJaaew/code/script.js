// {/* <article class="box ">
//       <ul>
//         <li>
//           <div class="flex">
//             <img class="image-got" src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="image1">
//             <h2>Eddard "Ned" Stark</h2>
//           </div>
//           <p>"Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark"</p>
//           <button class="button">Learn More!</button>
//         </li>
//       </ul>
//     </article> */}

let root = document.querySelector(".cards");
let rootTags = document.querySelector("tags");


    let allPeople = got.houses.reduce((acc,cv) => {
      acc = acc.concat(cv.people);
      return acc; 
  }, []);
  

let allTags = got.houses.map(house => house.name);
console.log(allTags);


  function createCards(data = []) {
    root.innerHTML = "";
    data.forEach((people) => {
      li = document.createElement("li");
      li.classList.add("box");
      let img = document.createElement("img");
      img.alt = people.name;
      img.src = people.image;
      let h2 = document.createElement("h2");
      h2.innerText = people.name;
      let p = document.createElement("p");
      p.innerText = people.description;
      let button = document.createElement("button");
      button.classList.add("button");
      button.innerText = "Know More!";
      li.append(img,h2,p,button);
      root.append(li);
    });
  };

function createTagsUI(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let p = document.createElement("p");
    p.innerText = tag;
    p.addEventListener("click",)
    rootTags.append(p);
  });
}

  createCards(allPeople);
  createTagsUI(allTags);
  // let ul = document.createElement('ul');
  
  // allPeople.houses.forEach((house) => {
  //     let li = document.createElement('li');
  //     let div = document.createElement('div');
  //     div.append(img,h2);
  //     let img = document.createElement('img');
  //     img.src = house.image;
  //     let h2 = document.createElement('h2');
  //     h2.innerText = house.name;
  //     let p = document.createElement('p');
  //     p.innerText = house.description;
  //     let button = document.createElement('button');
  //     button.innerText = house.wikiLink;
  
  //     li.append(div,p,button);
  //     ul.append(li);
  // })



  // let parentElm = document.querySelector('ul');
  
  // let cardsHTML = allPeople.map((person) => {
  //     return `
  //     <li class="box">
  //       <img class="image-got" src="${person.image}" alt="${person.name}">
  //       <h2>${person.name}</h2>
  //     <p>${person.description}</p>
  //     <a class="button" href=${person.wikiLink}>Learn More!</a>
  //   </li>`;
  // });
  
  // parentElm.innerHTML = cardsHTML.join(" ");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  