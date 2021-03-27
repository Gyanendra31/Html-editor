function editor(obj) {
  if (this === window) {
    return new editor(obj);
  }
  if (!obj.id) {
    return;
  }
  // NEW DEFINED FUNCTIONS
  this.create = function(val) {
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
  }
  this.child = function(parent, child) {
    return parent.appendChild(child);
  };
  this.el = document.getElementById(obj.id);
  console.log(this.el);

  var line = this.create({
    tag: 'div',
    class: 'line-container',
  });

  // CHILDS
  this.child(this.el, line);


}