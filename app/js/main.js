WebFontConfig = {
  google: { families: [ 'Roboto:700:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

  /* Trianglify */
  var pattern = new Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
  pattern.canvas(document.getElementById('triangles'));
})();


