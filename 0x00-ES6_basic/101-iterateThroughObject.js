export default function iterateThroughObject(reportWithIterator) {
  let employees = [];

  for (const department of reportWithIterator) {
    for (const employee of department.employees) {
      employees.push(employee);
    }
  }

  return employees.join(' | ');
}
