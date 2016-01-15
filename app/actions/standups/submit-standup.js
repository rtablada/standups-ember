import moment from 'moment';
import standupSaved from './standup-saved';

export default () => {
  return (dispatch, getState) => {
    const standup = getState().currentStandup.inputGatherers.map(input => input());
    const date = moment();

    fetch('https://tiny-lr.herokuapp.com/collections/standups', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, standup }),
    }).then(response => response.json())
    .then((standup) => {
      standupSaved(standup);
    });
  };
};
