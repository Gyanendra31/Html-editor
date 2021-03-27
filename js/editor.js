// NEW DEFINED FUNCTIONS

function edior(obj) {
  if (this === window) {
    return new editor(obj);
  }
  if (!obj.id) {
    return;
  }

  this.el = document.getElementById(obj.id);

  var line = create({
    tag: 'div',
    class: 'line-container',
  });

  // CHILDS
  child(this.el, line);

}
console.log(editor);