import {Component} from '../../core/Component';

export class Table extends Component {
  static cssClassName = 'vtab__table';

  constructor($root) {
    super($root);
  }

  toHTML() {
    return '<h1>Table</h1>';
  }
}
