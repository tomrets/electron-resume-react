// renderer/store/index.ts
import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import resumeModel from './resumeModel';
import globalModel from './globalModel';
import templateModel from './templateModel';
import themeModel from './themeModel';

// ð è¿éåªéè¦è°ç¨ RcReduxModel å®ä¾åä¸ä¸å¾å°æåç reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel, templateModel, themeModel]);

// ð æ ä¾µå¥å¼çä½¿ç¨ Reduxï¼å³ä½¿ä½ åæåå§ç reducer ä¹ç§æ ·æ¯æ
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
