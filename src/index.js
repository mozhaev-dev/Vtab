import './scss/index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {Vtab} from './components/vtab/Vtab';
import {Header} from './components/header/Header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';

const vtab = new Vtab('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
});

vtab.render();
