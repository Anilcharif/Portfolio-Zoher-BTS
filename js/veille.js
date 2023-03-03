document.addEventListener("DOMContentLoaded", () => {


    const menuShowBtn = document.getElementById('afficher_btn');
    const menuHideBtn = document.getElementById('cacher_btn');
    const veille = document.querySelector('.veille');

    menuShowBtn.addEventListener('click', () => { 

        veille.style.display = 'none';
        
                                    
        

    })
    menuHideBtn.addEventListener("click", () =>{

        veille.style.display = 'block';
  

    })


    

  });
