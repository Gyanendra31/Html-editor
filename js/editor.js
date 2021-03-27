// NEW DEFINED FUNCTIONS
var create = function(val) {
  if (typeof val == 'string') {
    val = val.toUpperCase();
    return document.createElement(val);
  } else if (typeof val == 'object') {
    if (val.tag && val.class) {
      var a = document.createElement(val.tag);
      a.className = val.class;
      return a;
    }
  }
};
var child = function(parent, child) {
  return parent.appendChild(child);
};

function editor(obj) {
  if (this === window) {
    return new editor(obj);
  }
  if (!obj.id) {
    return;
  }

  this.el = document.getElementById(obj.id);
  console.log(this.el);

  var line = create({
    tag: 'div',
    class: 'line-container',
  });

  // CHILDS
  child(this.el, line);

}