let sports: String[] = ["cricket", "Golf", "football", "tennis", "bascketBall"];

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}

//simplified for loop

for (let temp of sports) {
  if (temp == "cricket") {
    console.log(`${temp} is my fav sport!`);
  } else console.log(temp);
}
