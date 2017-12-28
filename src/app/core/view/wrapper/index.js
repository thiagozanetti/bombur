import m from 'mithril';

import Header from '../header';
import Footer from '../footer';
import Container from '../container';

import './wrapper.css';

export default {
  view(vnode) {
    
  return m('main', 
    { class: 'wrapper' }, 
    [
      Header,
      m(Container, vnode.children),
      Footer,
    ]);
  }
};