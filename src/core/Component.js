import {DOMListener} from './DOMListener';

export class Component extends DOMListener {
  constructor($root) {
    super($root);
  }

  toHTML() {
    return '';
  }
} 
