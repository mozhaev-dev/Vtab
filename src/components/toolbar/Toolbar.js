import {Component} from '../../core/Component';

export class Toolbar extends Component {
  static cssClassName = 'vtab__toolbar';

  constructor($root) {
    super($root);
  }

  toHTML() {
    return '<h1>Toolbar</h1>';
  }
}
