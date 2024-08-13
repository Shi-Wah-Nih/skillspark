console.log("Q1. pyramid");
for(let i=1; i<=5; i++)
{
    let star ="";
    for(let j=1; j<=i; j++)
    {
        star += ' * '
    }
    console.log(star);
}


console.log("Q2. inverted pyramid");
for(let i=5; i>= 1; i--)
{
    let star =" ";
    for(let j=0; j<i; j++)
    {
        star += ' * '
    }
    console.log(star);
}


console.log("Q3. Solid rectangle");
for(let i=1; i<=5; i++)
{
    let star = " ";
    for(j=1; j<=5; j++ )
    {
        star = star + "*";
    }
    console.log(star);
}




 console.log("Q4. Pyramid")
for (let i = 1; i <= 5; i++) { 
    let star = "* "; 
    let space = '  '; 
    console.log(space.repeat((5 - i)) + star.repeat(i * 2 - 1)); 
}



console.log("Q5. Inverted Pyramid")

for (let i = 5; i >= 1; i--)
     { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((5 - i)) + str.repeat(i * 2 - 1)); 
}

console.log("Q6. Hollow Rectangle");
const width = 7;
const height = 5;

for (let i = 0; i < height; i++) {
  if (i === 0 || i === height - 1) {
    
    console.log('*'.repeat(width));
  } else {

    console.log('*' + ' '.repeat(width - 2) + '*');
  }
}


console.log(" print X");
const size = 5; 

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    if (j === i || j === size - 1 - i) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}