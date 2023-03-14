
// IMAGES / WORKS



fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(data=> {
    console.log(data);
    console.log(data[0].categoryId);

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




// FILTRES


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
