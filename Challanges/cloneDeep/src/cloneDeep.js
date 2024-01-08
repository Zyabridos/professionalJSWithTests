import _ from 'lodash';

const cloneDeep = (data) => {
  const result = {};
  const entries = Object.entries(data);
  entries.map(([key, value]) => {
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
    return result;
  });
  return result;
};

export default cloneDeep;
