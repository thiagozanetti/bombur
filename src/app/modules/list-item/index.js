import m from 'mithril';

import './list-item.css';

export default {
  view(vnode) {
    const item = vnode.attrs.item;

    return m('li', {
      class: `todo-item${ item.done ? ' checked' : '' }`,
      key: item.id
    }, [
      m('input[type=checkbox]', {
        onclick: () => item.done = !item.done,
        checked: item.done
      }),
      item.title,
    ])
  }
};