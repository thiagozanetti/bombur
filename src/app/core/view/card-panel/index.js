import m from 'mithril';

import './card-panel.css';

export default {
  view(vnode) {
    return m('.card-panel', vnode.children);
  }
};