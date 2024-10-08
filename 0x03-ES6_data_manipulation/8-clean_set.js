export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const resultArray = [];
  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const subString = element.slice(startString.length);
      resultArray.push(subString);
    }
  }

  return resultArray.join('-');
}
