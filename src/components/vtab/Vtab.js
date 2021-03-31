import {$} from '../../core/DOM.js';

export class Vtab {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components ?? [];
  }

  getRoot() {
    const root = $.createElement('div', {classList: 'vtab'});

    this.components = this.components.map(Component => {
      const el = $.createElement('div', {classList: Component.cssClassName});

      const component = new Component(el);
      el.html(component.toHTML());
      root.append(el);
      
      return component;
    });
    
    return root.$el;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach(component => component.init());
  }
}
