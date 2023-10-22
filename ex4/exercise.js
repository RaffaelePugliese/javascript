function sumUntil(maxValue) { 
  let num = 0;
for (i = 1; i <= maxValue ; i++) {
  num = num + i;
}
return num;
}
console.log(sumUntil(5));