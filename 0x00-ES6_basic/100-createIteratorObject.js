export default function createIteratorObject(report) {
  const departments = Object.values(report);

  return {
    [Symbol.iterator]: function* () {
      for (const department of departments) {
        yield* department;
      }
    },
  };
}
