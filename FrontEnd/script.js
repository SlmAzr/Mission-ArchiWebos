
// IMAGES / WORKS



fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(data=> {
    console.log(data);

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
})




