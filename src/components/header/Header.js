import {Component} from '../../core/Component';

export class Header extends Component {
  static cssClassName = 'vtab__header';

  constructor($root) {
    super($root);
  }

  toHTML() {
    return '<h1>Header</h1>';
  }
}
