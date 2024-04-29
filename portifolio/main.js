function ScrollPosicao(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const sectionId = item.textContent.toLowerCase();
            ScrollPosicao(sectionId);
        });
    });
});

function verificaFormulario(){

    const email = document.querySelector('input[name="email"]').value;
    const nome = document.querySelector('input[name="nome"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;

         if (email.trim() === '' || nome.trim() === '' || telefone.trim() === '') {
             alert('Por favor, preencha todos os campos para me contatar.');
             return false;
        }

        if (email.trim() === '') {
            alert('Por favor, preencha o campo de e-mail.');
            return false; 
        }
        
       
        if (nome.trim() === '') {
            alert('Por favor, preencha o campo de nome.');
            return false; 
        }
        
      
        if (telefone.trim() === '') {
            alert('Por favor, preencha o campo de telefone.');
            return false; 
        }
        
        return true;
}