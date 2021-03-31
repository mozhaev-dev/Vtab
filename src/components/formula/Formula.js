import {Component} from '../../core/Component';

export class Formula extends Component {
  static cssClassName = 'vtab__formula';

  constructor(root) {
    super(root);
  }

  toHTML() {
    return '<h1>Formula</h1>';
  }

  onClick = () => {
    
  }

  onInput = () => {
  
  }
}
