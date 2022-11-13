document.addEventListener("DOMContentLoaded", () => {


    
    const menuShowBtn = document.getElementById('afficher_btn');
    const menuHideBtn = document.getElementById('cacher_btn');
    const menuOverlay = document.querySelector('.nav_overlay');
    const svg = document.querySelector('svg');

    menuShowBtn.addEventListener('click', () => { 
        menuOverlay.classList.add('afficher_overlay')    
        svg.style.display = 'none'; 
    })
    menuHideBtn.addEventListener("click", () =>{
        menuOverlay.classList.remove('afficher_overlay')
        svg.style.display = 'block';

    })


    

  });
