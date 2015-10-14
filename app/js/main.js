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
})();

var canv = document.getElementsByClassName('header__canvas');
var pattern = new Trianglify({
  width: canv[0].getBoundingClientRect().width,
  height: canv[0].getBoundingClientRect().height
});
pattern.canvas(canv[0]);
