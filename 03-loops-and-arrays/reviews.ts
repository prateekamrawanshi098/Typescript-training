let reviews: number[] = [3, 4.5, 3, 5, 2];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total = total + reviews[i];
}

let average = total / reviews.length;
console.log(`total = ${total} and average= ${average}`);
