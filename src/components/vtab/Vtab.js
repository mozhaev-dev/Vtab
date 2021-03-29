import {$} from '../../core/DOM.js';

export class Vtab {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components ?? [];
  }

  getRoot() {
    const root = $.createElement('div', {classList: 'vtab'});

    this.components.forEach(Component => {
      const el = $.createElement('div', {classList: Component.cssClassName});

      const component = new Component(el);
      el.html(component.toHTML());
      root.append(el);
    });
    
    return root.$el;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
