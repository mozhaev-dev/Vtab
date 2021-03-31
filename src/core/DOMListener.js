export class DOMListener {
  constructor(root) {
    if (!root) throw new Error('Root element is not provided for DOMListener');
    this.root = root;
    this.listeners = [];
  }

  initDOMListeners() {
    Object.entries(this).forEach(([name, value]) => {
      if (
        name[2].toUpperCase() === name[2] && 
        /^on\w+/.test(name) && 
        typeof(value) === 'function'
      ) {
        const eventName = name.slice(2).toLowerCase();
        this.listeners.push({eventName, handler: value});
        this.root.on(eventName, value);
      }
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(([eventName, handler]) => {
      this.root.$el.removeEventListener(eventName, handler);
    });
  }
}
