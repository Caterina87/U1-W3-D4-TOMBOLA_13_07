const creaTabellone = function () {
  const tabellone = document.getElementById("tabellone");
  for (let index = 1; index <= 76; index++) {
    tabellone.innerHTML += `<div id= '${index}'class='caselle'>${index}</div>`;
  }
  return tabellone;
};
console.log("Funziona?", creaTabellone());

const numeriEstratti = [];

const cercaNumero = function (n) {
  let ret = false;
  for (let index = 0; index < numeriEstratti.length; index++) {
    if (numeriEstratti[index] === n) {
      ret = true;
    }
  }
  return ret;
};

const estraiNumero = function (ev) {
  ev.preventDefault();
  let isEstratto = false;
  const estratto = Math.floor(Math.random() * 76);
  // Lo cerchi nell'array numeriestratti
  isEstratto = cercaNumero(estratto);
  // se presente isEstratto = true
  if (isEstratto) {
    console.log("numero già estratto", estratto);
    estraiNumero(ev);
  } else {
    numeriEstratti.push(estratto);
    const testo = document.getElementById("paragrafoEstratto");
    testo.innerText = "E' stato estratto il numero: " + estratto;
    const casella = document.getElementById(estratto);
    casella.classList.add("caselleSelezionate");
  }
  console.log(numeriEstratti);
  // si genera un nuovo numero random
  // e si riparte dall'inzio
};
