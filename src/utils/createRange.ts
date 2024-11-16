const createRange = (start: number, end: number): Array<number> => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export default createRange;
