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
  'Lucka (Letiště) '
];

const l = [
  'Včera večer v parku...',
  'baf',
  'Tak sem tady, co byly tvoje další dvě přání?',
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
