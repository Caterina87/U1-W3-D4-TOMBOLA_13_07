const creaTabellone = function () {
  const tabellone = document.getElementById("tabellone");
  for (let index = 1; index <= 76; index++) {
    tabellone.innerHTML += `<div id= '${index}'class='caselle'>${index}</div>`;
  }
  return tabellone;
};
console.log("Funziona?", creaTabellone());

const numeriEstratti = [];

const estraiNumero = function (ev) {
  ev.preventDefault();

  const estratto = Math.floor(Math.random() * 76);
  console.log(estratto);
};
