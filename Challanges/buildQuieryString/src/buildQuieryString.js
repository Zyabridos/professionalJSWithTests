export default (obj) => {
  let result = '';
  const entries = Object.entries(obj);
  const sortedEntries = entries.sort();
  const mappedSortedEntries = sortedEntries.map(([key, value]) => ([`${key}=${value}`]));
  const flattedSorted = mappedSortedEntries.flat();
  for (const current of flattedSorted) {
    result = `${result}&${current}`;
  }
  return result.slice(1);
};
