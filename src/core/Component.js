import {DOMListener} from './DOMListener';

export class Component extends DOMListener {
  constructor(root, options = {}) {
    super(root);
    this.name = options.name ?? '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
} 
