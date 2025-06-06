var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  const n = intervals.length;

  // Step 1: Add intervals before newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Step 3: Add remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
