document.addEventListener("DOMContentLoaded", () => {


    const menuShowBtn = document.getElementById('afficher_btn');
    const menuHideBtn = document.getElementById('cacher_btn');
    const competence = document.querySelector('.competence');

    menuShowBtn.addEventListener('click', () => { 

        competence.style.display = 'none';
        
                                    
        

    })
    menuHideBtn.addEventListener("click", () =>{

        competence.style.display = 'block';
  

    })


    

  });
