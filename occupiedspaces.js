function occupiedSpaces(N, day1, day2) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (day1[i] === "C" && day2[i] === "C") {
      count++; // add 1 or count +1
    }
  }
  return count;
}
console.log(occupiedSpaces(5, "CC..C", ".CC.."));
