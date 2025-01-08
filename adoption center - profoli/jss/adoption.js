document.addEventListener('DOMContentLoaded', function () { //present "type of animal" question if yes is choosen
    const yesPet = document.getElementById('yes-pet');
    const noPet = document.getElementById('no-pet');
    const typeOfPetQuestion = document.getElementById('type-of-animal');

    // Event listener for 'Yes' radio button
    yesPet.addEventListener('change', function() {
        if (yesPet.checked) {
            typeOfPetQuestion.style.display = 'inline'; 
        }
    });

    // Event listener for 'No' radio button
    noPet.addEventListener('change', function() {
        if (noPet.checked) {
            typeOfPetQuestion.style.display = 'none'; 
        }
    });
});
document.addEventListener('DOMContentLoaded',function(){ //present message after submiting form
    const form = document.getElementById('adoption-form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        form.innerHTML='<p>We welcome you to our family. We will contact you soon.</p>'
        form.style.textAlign = 'center';
        form.style.padding = '20px';
        form.style.marginTop = '20px';
        form.style.backgroundColor = '#f4f4f5';
        form.style.borderRadius = '8px';
        form.style.fontSize='24px';
        form.style.fontWeight='bold';
    }); 
});