export default function createIteratorObject(report) {
  /* eslint-disable no-unused-vars */
  return Object.values(report.allEmployees).flatMap((employees) => employees);
}
