let altura = Number(prompt("Por favor, informe sua altura"));
let peso = Number(prompt("Por favor, informe seu peso"));
let imc;

imc = (peso/(altura*altura));

if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(1)} Abaixo do peso`);
}
    else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Seu IMC é ${imc.toFixed(1)}. Seu peso está normal.`);
}
    else if (imc >= 25 && imc <= 29.9) {
        alert(`Seu IMC é ${imc.toFixed(1)}. Isso indica sobrepeso.`);
}
    else if (imc >= 30) {
        alert(`Seu IMC é ${imc.toFixed(1)}. Isso indica obesidade.`);
}