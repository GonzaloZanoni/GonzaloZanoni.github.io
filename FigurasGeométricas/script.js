const imagenes = [
  "imagen-0",
  "imagen-1",
  "imagen-2",
  "imagen-3",
  "imagen-4",
  "imagen-5",
  "imagen-6",
  "imagen-7",
];

const puzzle = document.getElementById("puzzle");
const piezas = document.getElementById("piezas");
const mensaje = document.getElementById("mensaje");

let terminado = imagenes.length;

while (imagenes.length) {
  const index = Math.floor(Math.random() * imagenes.length);
  const div = document.createElement("div");
  div.className = "pieza";
  div.id = imagenes[index];
  div.draggable = true;

  div.style.backgroundImage = `url("recursos/${imagenes[index]}.jpg")`;
  piezas.appendChild(div);
  imagenes.splice(index, 1);
}

for (let i = 0; i < terminado; i++) {
  const div = document.createElement("div");

  div.className = "placeholder";
  div.dataset.id = i;
  puzzle.appendChild(div);
}

piezas.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("id", e.target.id);
});

puzzle.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.classList.add("hover");
});

puzzle.addEventListener("dragleave", (e) => {
  e.target.classList.remove("hover");
});

puzzle.addEventListener("drop", (e) => {
  e.target.classList.remove("hover");

  const id = e.dataTransfer.getData("id");
  const numero = id.split("-")[1];

  if (e.target.dataset.id === numero) {
    e.target.appendChild(document.getElementById(id));

    terminado--;

    if (terminado === 0) {
      Swal.fire({
        title: "FELICITACIONES!",
        text: "Lograste completar el ejercicio con éxito, vamos al siguiente!",
        // html: '<button class="buttonOk" onclick="redirigirHaciaAbajo()">OK</button>',
        confirmButtonText: "OK",
        confirmButtonColor: "#5ee144",
        icon: "success",
        // confirmButtonText: false,
        // showConfirmButton: false,
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        footer: "<span>FIGURAS GEOMÉTRICAS</span>",
        width: "40%",
      });
      // alert("Muy bien perro");
      // document.body.classList.add("ganaste");
    }
  }
});

const imagenes2 = [
  "imagen-8",
  "imagen-9",
  "imagen-10",
  "imagen-11",
  "imagen-12",
  "imagen-13",
  "imagen-14",
  "imagen-15",
];

const puzzle2 = document.getElementById("puzzle2");
const piezas2 = document.getElementById("piezas2");
const mensaje2 = document.getElementById("mensaje2");

let terminado2 = imagenes2.length;

while (imagenes2.length) {
  const index = Math.floor(Math.random() * imagenes2.length);
  const div = document.createElement("div");
  div.className = "pieza2";
  div.id = imagenes2[index];
  div.draggable = true;

  div.style.backgroundImage = `url("recursos/${imagenes2[index]}.jpg")`;
  piezas2.appendChild(div);
  imagenes2.splice(index, 1);
}

for (let i = 0; i < terminado2; i++) {
  const div = document.createElement("div");

  div.className = "placeholder2";
  div.dataset.id = i;
  puzzle2.appendChild(div);
}

piezas2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("id", e.target.id);
});

puzzle2.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.classList.add("hover2");
});

puzzle2.addEventListener("dragleave", (e) => {
  e.target.classList.remove("hover2");
});

puzzle2.addEventListener("drop", (e) => {
  e.target.classList.remove("hover2");

  const id = e.dataTransfer.getData("id");

  const numero = id.split("-")[1];
  console.log("Pieza: ", numero);
  console.log("Caja:", parseInt(e.target.dataset.id) + 8);

  if (parseInt(e.target.dataset.id) + 8 == numero) {
    e.target.appendChild(document.getElementById(id));

    terminado--;
    console.log(terminado);
    if (terminado === -8) {
      console.log(terminado);
      Swal.fire({
        title: "Felicitaciones!",
        text: "Lograste completar el ejercicio con éxito",
        html: '<button class="buttonOk" onclick="refrescarPagina();">OK</button>',
        icon: "success",
        confirmButtonText: false,
        showConfirmButton: false,
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        footer: "<span>FIGURAS GEOMÉTRICAS</span>",
        width: "40%",
      });
      // refrescarPagina();
      // alert("Muy bien perro");
      // document.body.classList.add("ganaste");
    } else if (terminado === 0) {
      Swal.fire({
        title: "ERROR! (Completa la primera parte)",
        text: "No completaste la primera etapa!",
        html: '<button class="buttonError" onclick="refrescarPagina();">OK</button>',
        // confirmButtonText: "OK",
        // confirmButtonColor: "#5ee144",
        // cancelButtonColor: "red",
        icon: "error",
        confirmButtonText: false,
        showConfirmButton: false,
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        footer: "<span>FIGURAS GEOMÉTRICAS</span>",
        width: "40%",
      });
    }
  }
});

function refrescarPagina() {
  location.reload();
}
function redirigirHaciaAbajo() {
  window.scrollBy(0, 100);
}
