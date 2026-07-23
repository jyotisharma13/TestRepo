var sum = 0;
for (var i = 1; i <= 5; i++);//{with semicolon at the end of for loop, the loop body is empty and does not execute any code. The sum will remain 0.
  sum += i;
//}
console.log(sum);

let j = 0;
while (j < NaN) {
  j++;
}
console.log(j);
let k = 3, count = 0;
do {
  count++;
} while (k-- > 0);
console.log(count + " " + k);