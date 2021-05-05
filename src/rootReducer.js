import { combineReducers } from 'redux';


import AppReducer from './AppReducer';


const rootReducer = combineReducers({

    mainStore: AppReducer,

});

export default rootReducer;