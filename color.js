const colorInput = document.getElementById('colorInput');
const changeColorBtn = document.getElementById('changeColorBtn');

const colorParrafo = document.querySelector(".colorParrafo");
const card = document.querySelector(".card");

changeColorBtn.addEventListener('click', () => {
    const color = colorInput.value; 

    colorParrafo.textContent = color;
    card.style.backgroundColor = color;

    navigator.clipboard.writeText(color).then(() => {
        alert(`Color ${color} copiado al portapapeles!`);
    }).catch((err) => {
        console.error('Error al copiar el color: ', err);
    })
})