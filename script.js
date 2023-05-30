document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cropy').innerText = `© 69420 - ${new Date().getFullYear()} ~ Morvicek`;

})

const x = [
  'Lída',
  'Natka',
  'Laura',
  'Kája',
  'Ella',
  'Róza',
  'Mája',
  'Lucka (Letiště)',
    "Adam"
];

const l = [
  'Včera večer v parku...',
  'baf',
  'Tak sem tady, co byly tvoje další dvě přání?',
  'Čau Šťávo, kam tečeš?',
  'Nepracuješ náhodou v cukrářství? Protože jsi fakt sladká.',
  'Na stupnici od 1 do 10 jsi 9. A já jsem ta  1, která ti chybí.',
  'Promiň, to jsi mluvila na mě? Ne? Nevadí, můžeš s tím začít klidně teď.',
  'Existují tři druhy holek, které se líbí klukům: roztomilé, hezké a sexy. Je zajímavé, že ty splňuješ všechny tři podmínky.',
  'Jsi opravdu krásná, ale myslím si, že to je na tobě to nejméně zajímavé. Rád bych se dozveděl víc.',
  'Ty seš tak hezká, že jsem zapomněl svojí balící hlášku.',
  'Sex?',
  'Můj táta se v mém životě objevuje stejně jako Patrik u nás ve škole',
  'Ztratil jsem své telefonní číslo, nechceš mi půjčit to tvoje?',
  'mrk mrk',
  'Přitahuješ mě natolik, že bych kvůli tobě klidně začal číst'
];

$("#roll").click(function(){

  let random = Math.ceil((Math.random()*x.length));
  let es = x[random];
  $("#left").html(es);

  let randome = Math.ceil((Math.random()*l.length));
  let ese = l[randome];
  $("#right").html(ese);
});

function set(){
  let random = Math.ceil((Math.random()*x.length-1));
  let es = x[random];
  $("#left").html(es);

    let randome = Math.ceil((Math.random()*l.length-1));
  let ese = l[randome];
  $("#right").html(ese);
}
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

async function roll(){
set()
}
