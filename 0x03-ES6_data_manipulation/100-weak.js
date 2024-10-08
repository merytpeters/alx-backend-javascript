export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  const currentCount = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, currentCount + 1);

  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
