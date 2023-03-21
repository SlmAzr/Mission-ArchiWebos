

document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('.form');
  
    formEl.addEventListener('submit', event => {
      event.preventDefault();
  
      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);
      // console.log(data);
   

      // fetch('http://localhost:5678/api/users/login',{
      //   method: 'POST',
      //   headers: {
      //       'Content-Type': 'application/json',
      //       // 'Cache-Control': 'no-cache'
      //   },
      //   body: JSON.stringify(data)
        
      // }).then(res => res.json())
      //   .then(data => console.log(data))

    });
    fetch("http://localhost:5678/api/categories")
    .then(response => response.json())
    .then(data=> {
        console.log(data);
      

  });









    
  });
  

