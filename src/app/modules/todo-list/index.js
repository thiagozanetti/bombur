import m from 'mithril';

import ListItem from '../list-item';

import './todo-list.css';

export default {
  view(vnode) {
    const todo = vnode.attrs.todo;

    return m('.todo-list', 
    m('.todo-list__first-layer',
      m('.todo-list__second-layer',
        m('.todo-list__container', [
          m('.todo-list__title-bg', m('.todo-list__title', todo.title)),
          m('ul.todo-list__list', todo.items.map((item) => m(ListItem, {
            item
          }))),
        ])
      )
    ));
  }
};