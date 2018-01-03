import m from 'mithril';

import CardPanel from '../../core/view/card-panel';
import TodoList from '../todo-list';

import { mockedState } from '../../../../temp/data';

import './dashboard.css';

export default {
  view() {
    return m('.dashboard', [
      m('h3.sub-title', 'Hello! this is what you have for today:'),
      m(CardPanel, mockedState.todos.map((todo) => m(TodoList, { todo }))),
    ]);
  }
};