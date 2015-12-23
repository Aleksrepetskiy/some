window.onload = function() {
  // var div = document.createElement('div');
  // div.className = 'header';
  // document.body.appendChild(div);
  // var h3 = document.createElement('h3');
  // h3.innerHTML = 'Тест по программированию';'Вариант ответа №' + j
  // div.appendChild(h3);
  DOMCreator = function() {};
  DOMCreator.createElement = function(tag, parent, className, innerHTML) {
    var elem = document.createElement(tag);
    parent.appendChild(elem);
    if (className) {
      elem.className = className;
    }
    if (innerHTML) {
      elem.innerHTML = innerHTML;
    }
    return elem;
  };
  var div = DOMCreator.createElement('div', document.body, 'header');
  DOMCreator.createElement('h3', div, '', 'Тест по программированию');
  var content = DOMCreator.createElement('ul', document.body, 'content');
  for (var i = 1; i <= 3; i++) {
    var li1 = DOMCreator.createElement('li', content);
    DOMCreator.createElement('h4', li1, '', i + '. Вопрос №' + i);
    var ul = DOMCreator.createElement('ul', li1);
    for (var j = 1; j <= 3; j++) {
      DOMCreator.createElement('li', ul);
    }
  }
};
