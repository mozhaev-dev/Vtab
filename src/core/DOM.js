class DOM {
  constructor(element) {
    this.$el = element;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    return this.html('');
  }

  append(el) {
    if (el instanceof DOM) {
      this.$el.append(el.$el);
    } else {
      this.$el.append(el);
    }

    return this;
  }
}

export function $(selector) {
  return typeof selector === 'string' ?
    new DOM(document.querySelector(selector)) :
    new DOM(selector);
}

$.createElement = (tagname, {
  classList = '',
  attributes = {},
}) => {
  const $el = document.createElement(tagname);

  if (classList) $el.classList = classList;

  Object.entries(attributes).forEach((attr, value) => {
    $el.setAttribute(attr, value);
  });
  
  const el = new DOM($el);
  // console.log(el);
  return el;
};
