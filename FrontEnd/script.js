
// IMAGES / WORKS

fetch('http://localhost:5678/api/works')
.then(response => response.json()) // On convertit la réponse en JSON
.then(data => {
  console.log(data);});


fetch('http://localhost:5678/api/works')
.then(response => response.json()) // On convertit la réponse en JSON
.then(data => {
  // On boucle sur les données
  for (const item of data) {
    // On crée une nouvelle figure
    const figure = document.createElement('figure');
    
    // On crée l'image
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    img.names = item.category.name;
    console.log(img.names);
    img.setAttribute("crossorigin", "anonymous"); // Ajout du tag "crossorigin"
    
    
    // On crée la légende
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.title;
    
    // On ajoute l'image et la légende à la figure
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    // On ajoute la figure au conteneur "gallery"
    document.querySelector('.gallery').appendChild(figure);
  }});



// FILTRES


const button = document.querySelector('#tous');
function filtresTous(){
  // console.log("rarara");
  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data=> {

    const figures = document.querySelectorAll('main figure');
      figures.forEach(figure => {
        const figureCategoryId = parseInt(figure.getAttribute('data-category-id'));
        if (figureCategoryId !== 1) {
          figure.classList.add('hidden');
        }
      });
    const gallery = document.querySelector('.gallery');

    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.imageUrl;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.title;

        const figure = document.createElement('figure');
        figure.appendChild(img);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);
    });
    
});
}
button.addEventListener('click', filtresTous);


const button2 = document.querySelector('#objet');
function filtresObjets() {
  fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
      const figures = document.querySelectorAll('main figure');
      figures.forEach(figure => {
        const figureCategoryId = parseInt(figure.getAttribute('data-category-id'));
        if (figureCategoryId !== 1) {
          figure.classList.add('hidden');
        }
      });
      const filteredData = data.filter(item => item.categoryId === 1);
      const gallery = document.querySelector('.gallery');

      filteredData.forEach(item => {
          const img = document.createElement('img');
          img.src = item.imageUrl;
  
          const figcaption = document.createElement('figcaption');
          figcaption.textContent = item.title;
  
          const figure = document.createElement('figure');
          figure.appendChild(img);
          figure.appendChild(figcaption);
  
          gallery.appendChild(figure);
      });

    });
}
button2.addEventListener('click', filtresObjets);


const button3 = document.querySelector('#Appart');
function filtresAppart(){
  fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
      const figures = document.querySelectorAll('main figure');
      figures.forEach(figure => {
        const figureCategoryId = parseInt(figure.getAttribute('data-category-id'));
        if (figureCategoryId !== 2) {
          figure.classList.add('hidden');
        }
      });
      const filteredData = data.filter(item => item.categoryId === 2);
      const gallery = document.querySelector('.gallery');

      filteredData.forEach(item => {
          const img = document.createElement('img');
          img.src = item.imageUrl;
  
          const figcaption = document.createElement('figcaption');
          figcaption.textContent = item.title;
  
          const figure = document.createElement('figure');
          figure.appendChild(img);
          figure.appendChild(figcaption);
  
          gallery.appendChild(figure);
      });

    });
}
button3.addEventListener('click', filtresAppart);





const button4 = document.querySelector('#hr');
function filtresHR(){
  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const figures = document.querySelectorAll('main figure');
    figures.forEach(figure => {
      const figureCategoryId = parseInt(figure.getAttribute('data-category-id'));
      if (figureCategoryId !== 3) {
        figure.classList.add('hidden');
      }
    });
    const filteredData = data.filter(item => item.categoryId === 3);
    const gallery = document.querySelector('.gallery');

    filteredData.forEach(item => {
        const img = document.createElement('img');
        img.src = item.imageUrl;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.title;

        const figure = document.createElement('figure');
        figure.appendChild(img);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);
    });

  });
}
button4.addEventListener('click', filtresHR);




// CONNECTION





function connectedUser() {
  const token = localStorage.getItem('token');
  const btnModifier = document.getElementById('modifier');
  const fontBtn = document.querySelector('.fa-solid')
  if (token) {
    const login = document.querySelector('.login');  
    const logout = document.querySelector('.logout');
    const filtersDiv = document.querySelector('.filtres');
    filtersDiv.style.display = 'none';
    login.style.display = 'none';
    logout.style.display = 'block';
    btnModifier.style.display = 'block';
    // fontBtn.style.display = 'block';
    console.log('here');
    console.log(token);

    // Ajouter les éléments d'édition si l'utilisateur est connecté
    const blackHeadbandElement = document.createElement("div");
    blackHeadbandElement.classList.add("admin-headband");

    const editionModeElement = document.createElement("div");
    editionModeElement.classList.add("edition-mode");
    editionModeElement.innerHTML = `<i class="fa-solid fa-pen-to-square"></i><span>Mode édition</span>`;

    const publishEditElement = document.createElement("button");
    publishEditElement.innerHTML = "publier les changements";

    blackHeadbandElement.appendChild(editionModeElement);
    blackHeadbandElement.appendChild(publishEditElement);

    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].prepend(blackHeadbandElement);

  } else {
    btnModifier.style.display = 'none';
    fontBtn.style.display = 'none';
  }
}

connectedUser();


function logout() {
  const logout = document.querySelector('.logout');
  logout.addEventListener('click', function() {
    localStorage.clear();
    window.location.href = "./index.html";
  });
}

logout();