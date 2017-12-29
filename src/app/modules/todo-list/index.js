import m from 'mithril';

import ListItem from '../list-item';

import './todo-list.css';

export default {
  view(vnode) {
    const todo = vnode.attrs.todo;

    return m('.todo-bg__first-layer',
      m('.todo-bg__second-layer',
        m('.todo-list__container', [
          m('.list-title__bg', m('.list-title', todo.title)),
          m('ul.todo-list', todo.items.map((item) => m(ListItem, { item }))),
        ])
      )
    );
  }
};