export default (callback) => {
  return {
    type: 'REGISTER_INPUT_GATHERER',
    callback,
  };
};
