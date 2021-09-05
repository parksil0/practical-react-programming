import { createStore, combineReducers } from 'redux';
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from './friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: '코딩 조아' }));
store.dispatch(addTimeline({ id: 2, desc: '리덕스 조아' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '사실 리덕스 너무 좋아' }));
store.dispatch(removeTimeline({ id: 1, desc: '코딩 조아' }));

store.dispatch(addFriend({ id: 1, name: '물개맨' }));
store.dispatch(addFriend({ id: 2, name: '번개맨' }));
store.dispatch(editFriend({ id: 2, name: '슈퍼맨' }));
store.dispatch(removeFriend({ id: 2, name: '슈퍼맨' }));