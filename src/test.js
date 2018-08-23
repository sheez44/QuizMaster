// Returns the right slide index based on the current position
function normalizeIndex(arr, index, fn) {
  // The logic doesn't care about the implementation, just the result
  const result = fn(index);

  // If the result is bigger than the length of the array we return the start of the array
  if (result > arr.length) {
    return 1;
  }

  // If the result is lower than the start of the array we return the end of the array
  if (result < 0) {
    return arr.length - 1;
  }

  // If the result is within the array parameters we return it
  return result;
}

function nextIndex(arr, index) {
  return normalizeIndex(arr, index, x => x + 1);
}
