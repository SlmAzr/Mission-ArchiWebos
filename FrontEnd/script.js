
// IMAGES / WORKS

fetch('http://localhost:5678/api/works')
.then(response => response.json()) 
.then(data => {

  for (const item of data) {
   
    const figure = document.createElement('figure');
    
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    img.names = item.category.name;
   
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    document.querySelector('.gallery').appendChild(figure);
  }});

// FILTRES

const tousBtn = document.querySelector('#tous');
function filtresTous(){
  
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
tousBtn.addEventListener('click', filtresTous);


const objetBtn = document.querySelector('#objet');
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
objetBtn.addEventListener('click', filtresObjets);


const appartBtn = document.querySelector('#Appart');
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
appartBtn.addEventListener('click', filtresAppart);





const hrBtn = document.querySelector('#hr');
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
hrBtn.addEventListener('click', filtresHR);

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