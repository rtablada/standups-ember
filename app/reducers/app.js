import Redux from 'npm:redux';
import currentStandup from './current-standup';
const {combineReducers} = Redux;

export default combineReducers({
  teamMembers(store = []) {return store;},

  currentStandup,
});
