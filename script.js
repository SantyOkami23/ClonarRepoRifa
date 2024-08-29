const students = [
    "ANDICA LARGO YULIET MELISA",
    "BETANCOURT MIRA JHONNY ALEXANDER",
    "CALVO PULIDO ERIKA ANDREA",
    "CARDONA LEON YISED TATIANA",
    "CARDONA VARGAS VALENTINA",
    "CASTAÑEDA MOSQUERA SANTIAGO",
    "CASTRO CASTAÑEDA SANTIAGO",
    "CASTRO SALAMANCA VERONICA",
    "ESCUDERO GONZALEZ JIMMY ALEJANDRO",
    "ESPINAL GOMEZ CLAUDIA MARCELA",
    "GALLEGO CADENA MIGUEL ANGEL",
    "GALVIS CASTAÑEDA LIZETH KATHERINE",
    "GARCIA MENDOZA JUAN ESTEBAN",
    "GIRALDO VILLA CARLOS ALBERTO",
    "GOMEZ MORALES JOSE ISAAC",
    "GOMEZ RAMIREZ JUAN CAMILO",
    "GONZALES CARDONA SILVIO ALEJANDRO",
    "GUAPACHA MARIN BRAYAN STIVEN",
    "HERNANDEZ CAMPUZANO KEVIN ALEXANDER",
    "HURTADO AMARILES LUIS ESTEBAN",
    "LOAIZA ARIAS JHON ALEJANDRO",
    "LOAIZA GIRALDO KARINA",
    "LONDOÑO RESTREPO JUAN ESTEBAN",
    "MANSO OSORIO DILMA LORENA",
    "MARIN GIRALDO DAHIANA",
    "MONCADA CASTRO ANGEL STEWAR",
    "PARRA LADINO MANUEL JOSE",
    "REDONDO HENAO LUIS HERNANDO",
    "RENDON JARAMILLO WILDER ANDRES",
    "RESTREPO VELEZ KATHERINE",
    "RODRIGUEZ RIVERA JOHAN STEVEN",
    "SALGADO PATIÑO JUAN ESTEBAN",
    "SALINAS SANCHEZ JOHAN SEBASTIAN",
    "SANCHEZ CUBILLOS LUIS ALBERTO",
    "VALENCIA ALTAMAR DUVAN FELIPE"
];

const selectButton = document.getElementById("selectButton");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

selectButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    const selectedStudent = students[randomIndex];
    popupMessage.textContent = `¡Felicidades! El estudiante seleccionado es: ${selectedStudent}`;
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000); // Ocultar popup después de 3 segundos
});
