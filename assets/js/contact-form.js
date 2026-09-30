(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var subject = data.get('subject') + ' — ' + data.get('name');
    var body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message');
    window.location.href = 'mailto:sashamark7777@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
