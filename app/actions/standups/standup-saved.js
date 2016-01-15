export default () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'STANDUP_START',
    });
    dispatch({
      type: 'RANDOMIZE_TEAM',
      teamMembers: getState().teamMembers,
    });
  };
};
