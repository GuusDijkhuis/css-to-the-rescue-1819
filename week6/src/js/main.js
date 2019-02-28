(function() {

  let r = Math.floor((Math.random() * 255) + 1)
  let g = Math.floor((Math.random() * 255) + 1)
  let b = Math.floor((Math.random() * 255) + 1)

  let rgb = '' + r + ', ' + g + ', ' + b + ''

  let winterBtn = document.querySelector('.winter-checkbox');

  document.documentElement.style.setProperty('--primary-color', rgb);

})()
