// const focusableSelector = "button, a, input, textarea";
            // let modal = null
            //   , focusables = []
            //   , previouslyFocusedElement = null;
            // const openModal = async function(e) {
            //     e.preventDefault();
            //     const o = e.target.getAttribute("href");
            //     modal = o.startsWith("#") ? document.querySelector(o) : await loadModal(o),
            //     focusables = Array.from(modal.querySelectorAll(focusableSelector)),
            //     previouslyFocusedElement = document.querySelector(":focus"),
            //     modal.style.display = null,
            //     focusables[0].focus(),
            //     modal.removeAttribute("aria-hidden"),
            //     modal.setAttribute("aria-modal", "true"),
            //     modal.addEventListener("click", closeModal),
            //     modal.querySelector(".js-modal-close").addEventListener("click", closeModal),
            //     modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation),

            //     modal2.removeAttribute("aria-hidden"),
            //     modal2.setAttribute("aria-modal", "true"),
            //     modal2.addEventListener("click", closeModal),
            //     modal2.querySelector(".js-modal-close").addEventListener("click", closeModal),
            //     modal2.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)



                
            // }
            //   , closeModal = function(e) {
            //     if (null === modal)
            //         return;
            //     null !== previouslyFocusedElement && previouslyFocusedElement.focus(),
            //     e.preventDefault(),
            //     modal.setAttribute("aria-hidden", "true"),
            //     modal.removeAttribute("aria-modal"),
            //     modal.removeEventListener("click", closeModal),
            //     modal.querySelector(".js-modal-close").removeEventListener("click", closeModal),
            //     modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
                
                
            //     modal2.setAttribute("aria-hidden", "true"),
            //     modal2.removeAttribute("aria-modal"),
            //     modal2.removeEventListener("click", closeModal),
            //     modal2.querySelector(".js-modal-close").removeEventListener("click", closeModal),
            //     modal2.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
                
                
            //     ;
            //     const o = function() {
            //         modal.style.display = "none",
            //         modal.removeEventListener("animationend", o),
            //         modal = null


            //         modal2.style.display = "none",
            //         modal2.removeEventListener("animationend", o),
            //         modal = null
            //     };
            //     modal.addEventListener("animationend", o)
            //     modal2.addEventListener("animationend", o)
            // }
            //   , stopPropagation = function(e) {
            //     e.stopPropagation()
            // }
            //   , focusInModal = function(e) {
            //     e.preventDefault();
            //     let o = focusables.findIndex(e=>e === modal.querySelector(":focus"));
            //     !0 === e.shiftKey ? o-- : o++,
            //     o >= focusables.length && (o = 0),
            //     o < 0 && (o = focusables.length - 1),
            //     focusables[o].focus()
            // }
            //   , loadModal = async function(e) {
            //     const o = "#" + e.split("#")[1]
            //       , t = document.querySelector(o);
            //     if (null !== t)
            //         return t;
            //     const l = await fetch(e).then(e=>e.text())
            //       , a = document.createRange().createContextualFragment(l).querySelector(o);
            //     if (null === a)
            //         throw `L'élément ${o} n'a pas été trouvé dans la page ${e}`;
            //     return document.body.append(a),
            //     a
            // };
            // document.querySelectorAll(".js-modal").forEach(e=>{
            //     e.addEventListener("click", openModal)
            // }
            // ),
            // window.addEventListener("keydown", function(e) {
            //     "Escape" !== e.key && "Esc" !== e.key || closeModal(e),
            //     "Tab" === e.key && null !== modal && focusInModal(e)
            // });





            // CONTENUE



//             fetch("http://localhost:5678/api/works")
// .then(response => response.json())
// .then(data=> {
//     // console.log(data);
//     // console.log(data[0].categoryId);

//     const gallery = document.querySelector('.modifer');

//     data.forEach(item => {
//         const img = document.createElement('img');
//         img.src = item.imageUrl;

//         const figcaption = document.createElement('figcaption');
//         figcaption.textContent = "éditer";

//         const figure = document.createElement('figure');
//         figure.appendChild(img);
//         figure.appendChild(figcaption);

//         gallery.appendChild(figure);
//     });
// });





//  TOUT SUPRIMER


// function suppGalerie(){
//   // console.log("rarara");
//   fetch("http://localhost:5678/api/works")
//   .then(response => response.json())
//   .then(data=> {

//     const figures = document.querySelectorAll('main figure');
//       figures.forEach(figure => {
//         const figureCategoryId = parseInt(figure.getAttribute('data-category-id'));
//         if (figureCategoryId !== 1) {
//           figure.classList.add('hidden');
//         }
//       });
    // const gallery = document.querySelector('.gallery');

    // data.forEach(item => {
    //     const img = document.createElement('img');
    //     img.src = item.imageUrl;

    //     const figcaption = document.createElement('figcaption');
    //     figcaption.textContent = item.title;

    //     const figure = document.createElement('figure');
    //     figure.appendChild(img);
    //     figure.appendChild(figcaption);

    //     gallery.appendChild(figure);
    // });
    
// });
// }


// function test(){
//   fetch('http://localhost:5678/api/works/1', {
//   method: 'DELETE',
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Erreur lors de la suppression de l\'élément.');
//     }
//     console.log('L\'élément a été supprimé avec succès.');
//   })
//   .catch(error => {
//     console.error('Une erreur s\'est produite :', error);
//   });

// }



const modifier = document.getElementById("modifier");
const modal = document.getElementById("modal");
const close = document.getElementsByClassName("close")[0];


function openModal() {
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}


modifier.addEventListener("click", function(event) {
  event.preventDefault();
  openModal();
});


close.addEventListener("click", function(event) {
  event.preventDefault();
  closeModal();
});


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});






fetch('http://localhost:5678/api/works')
.then(response => response.json()) 
.then(data => {
 
  const images = [];

 
  for (const item of data) {
 
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    img.names = item.category.name;
    img.id = item.id;
    console.log(img.names);
    img.setAttribute("crossorigin", "anonymous"); 


    images.push(img);

 
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
  }

  
  modifier.addEventListener("click", function(event) {
    event.preventDefault();
    displayGalleryImages(images);
    openModal();
  });
});


function displayGalleryImages(images) {
  const modalBody = document.querySelector('.modal-body');
  const tokens = localStorage.getItem('token');
  modalBody.innerHTML = '';

  images.forEach(image => {
   
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

   
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.id = image.id;
    img.classList.add('modal-image');
    img.setAttribute("crossorigin", "anonymous"); 


    imageContainer.appendChild(img);

    
    const editSpan = document.createElement('span');
    editSpan.textContent = 'éditer';
    imageContainer.appendChild(editSpan);

  
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'delete-icon');

    
    imageContainer.appendChild(deleteIcon);

  
    modalBody.appendChild(imageContainer);

    deleteIcon.addEventListener('click', function(event) {
      event.preventDefault();
    
     
      const index = images.indexOf(image);
    
      
      if (confirm('Voulez-vous vraiment supprimer cette image ?')) {
    
       
        images.splice(index, 1);
    
       
        const parent = deleteIcon.parentElement;
        parent.remove();
    
       
        const options = {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + tokens
          }
        };
        fetch(`http://localhost:5678/api/works/${img.id}`, options)
        .then(response => {
          if (response.ok) {
            console.log('Image supprimée avec succès');
  
           
            const imageElement = document.getElementById(image.id);
            if (imageElement) {
              imageElement.parentNode.remove();
            }
  
          } else {
            console.log('Une erreur est survenue');
          }
        })
        .catch(error => {
          console.error('Une erreur est survenue', error);
        });
    }
  });
});
}







  //  ://///////////////////////////////////////////-


const addPhotoBtn = document.querySelector('#ajouter-photo');
addPhotoBtn.addEventListener('click', () => {
  const addPhotoModal = document.querySelector('#add-photo-modal');
  addPhotoModal.style.display = 'block';
});

const addPhotoForm = document.querySelector('#add-photo-form');
addPhotoForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Récupérer les données du formulaire
  const title = document.querySelector('#title').value;
  const category = document.querySelector('#category').value;
  const image = document.querySelector('#image').files[0];

  let categoryId;

  console.log(categoryId, category);
  
  switch (category) {
   
    case 'objets':
      categoryId = 1;
      break;
    case 'appartements':
      categoryId = 2;
      break;
    case 'hotel_restaurant':
      categoryId = 3;
      break;
    
  }

  console.log(categoryId);
  
  const token = localStorage.getItem('token');
  
  // Envoyer les données à l'API
  const formData = new FormData();
  formData.append('title', title);
  formData.append('category', categoryId);
  formData.append('image', image);

  console.log(formData.getAll('category'));
  console.log(formData.getAll('title'));
  console.log(formData.getAll('image.name'));
  console.log(formData.get('image'));

  console.log(title, categoryId, image, image.name);

  const options = {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };
  
  try {
    const response = await fetch('http://localhost:5678/api/works', options);
    categoryId = Number(categoryId);
    console.log(categoryId);

    if (response.ok) {
      console.log('Image ajoutée avec succès');

      // Fermer la modale
      const addPhotoModal = document.querySelector('#add-photo-modal');
      addPhotoModal.style.display = 'none';

      // Rafraîchir la galerie d'images
      fetchGalleryImages();
    } else {
      console.log('Une erreur est survenue');
      alert('Une erreur est survenue lors de l\'ajout de l\'image');
    }
  } catch (error) {
    console.error('Une erreur est survenue', error);
    // alert('Une erreur est survenue lors de l\'ajout de l\'image');
  }
});

const addPhotoModal = document.querySelector('#add-photo-modal');
const addPhotoCloseBtn = addPhotoModal.querySelector('.close');
addPhotoCloseBtn.addEventListener('click', () => {
  addPhotoModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
  // Si l'événement de clic se produit en dehors de la modale, la fermer
  if (event.target == addPhotoModal) {
    addPhotoModal.style.display = 'none';
  }
});





// Afficher la prévisualisation de l'image à télécharger
function readFile(e) {
  e.preventDefault();

  // Constante et fonction pour la lecture de l'image
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    // Créer l'élément d'image de prévisualisation
    const previewImage = document.createElement("img");
    previewImage.setAttribute("id", "preview_image");
    previewImage.setAttribute("src", reader.result);
  
    // Ajouter les styles à l'élément de prévisualisation
    previewImage.style.maxWidth = "380px";
    previewImage.style.maxHeight = "220px";
    previewImage.style.width = "auto";
    previewImage.style.height = "auto";
    previewImage.style.objectFit = "cover";
    previewImage.style.objectPosition = "center center";
    previewImage.style.transform = "translateY(-17px)";
    previewImage.style.opacity = "1";

      
    // Ajouter l'image de prévisualisation au conteneur
    const picture = document.querySelector(".picture");
    picture.appendChild(previewImage);
      
    // Masquer le label de sélection de fichier
    const label = document.querySelector(".picture > label");
    label.style.opacity = "0";
      
    // Masquer l'image de logo et le paragraphe suivant la prévisualisation de l'image
    const logoImage = document.querySelector("#logo_image");
    const pMaxSize = document.querySelector(".picture > p");
    logoImage.style.display = "none";
    pMaxSize.style.display = "none";
  });
  
  // Lire le fichier sélectionné
  reader.readAsDataURL(inputFile.files[0]);
}

// Récupérer l'élément de fichier
const inputFile = document.getElementById("image");

// Ajouter un gestionnaire d'événements pour la sélection de fichier
inputFile.addEventListener("change", readFile);

