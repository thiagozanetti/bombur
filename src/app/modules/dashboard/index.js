import m from 'mithril';

import CardPanel from '../../core/view/card-panel';
import TodoList from '../todo-list';

import './dashboard.css';

const state = {
  todos: [{
    title: "Monaco - What do you want from me?",
    items: [{
        id: 1,
        title: 'There\'s one thing I would die for',
        dueTo: null,
        done: true,
      },
      {
        id: 2,
        title: 'It\'s  when you say my life is in your hands',
        dueTo: null,
        done: false,
      },
      {
        id: 3,
        title: '\'cause when you\'re near me your love is all I need',
        dueTo: null,
        done: true,
      },
      {
        id: 4,
        title: 'Now I can\'t imagine',
        dueTo: null,
        done: false,
      },
      {
        id: 5,
        title: 'What do you want from me?',
        dueTo: null,
        done: false,
      },
      {
        id: 6,
        title: 'It\'s not how it used to be',
        dueTo: null,
        done: false,
      },
      {
        id: 7,
        title: 'You\'ve taken my life away',
        dueTo: null,
        done: false,
      },
      {
        id: 8,
        title: 'Ruining everything',
        dueTo: null,
        done: false,
      },
      {
        id: 9,
        title: 'Sha la la la la la la',
        dueTo: null,
        done: false,
      },
      {
        id: 10,
        title: 'Sha la la la la la la',
        dueTo: null,
        done: false,
      },
      {
        id: 11,
        title: 'Sha la la la la la la',
        dueTo: null,
        done: false,
      },
      {
        id: 12,
        title: 'Sha la la la la la la',
        dueTo: null,
        done: false,
      },
    ],
  }, ],
};

export default {
  view() {
    return m('.dashboard', [
      m('h3.sub-title', 'Hello! this is what you have for today:'),
      m(CardPanel, state.todos.map((todo) => m(TodoList, { todo }))),
    ]);
  }
};