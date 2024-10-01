export default function iterateThroughObject(reportWithIterator) {
  const employeesList = [];

  for (const employee of reportWithIterator) {
    employeesList.push(employee);
  }
  return employeesList.join(' | ');
}
