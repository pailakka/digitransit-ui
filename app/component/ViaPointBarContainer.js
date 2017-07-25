import PropTypes from 'prop-types';
import { routerShape } from 'found';

import mapProps from 'recompose/mapProps';
import getContext from 'recompose/getContext';
import compose from 'recompose/compose';

import without from 'lodash/without';

import ViaPointBar from './ViaPointBar';

const getRouterContext = getContext({
  router: routerShape.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  }).isRequired,
});

const mapFunctions = mapProps(({ className, router, location }) => ({
  className,
  removeViaPoint: () =>
    router.replace({
      ...location,
      query: without(location.query, 'intermediatePlaces'),
    }),
  openSearchModal: () =>
    router.push({
      ...location,
      state: {
        ...location.state,
        viaPointSearchModalOpen: 1,
        customizeSearchOffcanvas: true,
      },
    }),
  intermediatePlaces: location.query && location.query.intermediatePlaces,
}));

const ViaPointBarContainer = compose(getRouterContext, mapFunctions)(
  ViaPointBar,
);

export default ViaPointBarContainer;
