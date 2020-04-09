const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 6;


const validatorPass = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.innerHTML = 'Masz bardzo dobre hasło';
        p.style.color = `green`;
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'Masz dobre hasło';
        p.style.color = 'yellow';
    } else {
        p.innerHTML = 'Masz słabe hasło';
        p.style.color = 'red';
    }
}

pass.addEventListener('keyup', function(){
    if (pass.value != ''){
        validatorPass();
    } else {
        p.innerHTML = 'Nie wpisałeś hasła';
        p.style.color = 'red';
    }
});