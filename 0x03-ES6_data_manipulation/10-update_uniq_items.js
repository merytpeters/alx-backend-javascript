import groceriesList from './9-groceries_list';

export default function updateUniqueItems(groceries = groceriesList()) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of groceries) {
    if (value === 1) {
      groceries.set(key, 100);
    }
  }
  return groceries;
}
