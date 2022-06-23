var brodectes = document.querySelectorAll('.add');
var content = document.querySelector('.wep2');
var btn = document.querySelector('.submit');
var cve = document.querySelector('.wle');
var price = document.querySelector('.price');

var price1 = 0;
brodectes.forEach(function (item) {
  item.onclick = function () {
    price1 += parseInt(item.getAttribute('price'));

    var content = document.querySelector('.wep2');
    content.innerHTML +=
      item.textContent +
      ' ' +
      ':' +
      ' ' +
      item.getAttribute('price') +
      '$' +
      '<br>';

    if (cve.innerHTML != ' ') {
      cve.style.display = 'block';
    }
  };
});
btn.onclick = function () {
  // console.log(price1);
  price.innerHTML =
    ' ToTal Bill' +
    ' ' +
    ':' +
    ' ' +
    price1 +
    '$' +
    '<br>' +
    'Thank you for purchasing from us';
};
