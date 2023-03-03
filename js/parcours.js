document.addEventListener("DOMContentLoaded", () => {


    const menuShowBtn = document.getElementById('afficher_btn');
    const menuHideBtn = document.getElementById('cacher_btn');
    const parcours = document.querySelector('.parcours');

    menuShowBtn.addEventListener('click', () => { 

        parcours.style.display = 'none';
        
                                    
        

    })
    menuHideBtn.addEventListener("click", () =>{

        parcours.style.display = 'grid';
  

    })


    

  });
