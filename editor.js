function editor(obj) {
  if (this === window) {
    return new editor();
  }
  if (!obj.el) {
    return;
  }
}