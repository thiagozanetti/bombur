import m from 'mithril';

import Wrapper from '../core/view/wrapper';

import RootRoute from '../route';
import HomeRoute from '../views/home/route';

const reducer = (acc, item) => {
  acc[item[0]] = {
    render() {
      return m(Wrapper, m(item[1]));
    }
  };

  return acc;
};

const reduceRoutes = (routes) => routes.reduce(reducer, {});

export default reduceRoutes([
  RootRoute,
  HomeRoute,
]);