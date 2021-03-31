function countUnique(arr) {
    return new Set(arr).size;
  }
  console.log(countUnique(['hi', 'hello', 'hi']));