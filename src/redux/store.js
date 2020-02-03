import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// reason for delcaring middleware like this is becuase it allows to scale 
// now we only have a logger middleware but in the future it might be more

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
