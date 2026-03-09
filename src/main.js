outer: for (let i = 2; i <= 100; i++) {
  inner: for (let k = 2; k < i; k++) {
    if (i % k === 0) continue outer;
  }
  console.log(i);
}
