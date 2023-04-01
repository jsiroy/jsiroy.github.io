// console.log("Hello World!");
// 
// 
// 
    // let firstName = "John";
    // let lastName = "Smith";
    // let age = "30";
    // let hobby = {
        // hobbies:["Biking", "Mountain Climbing", "Swimming"]
        //    };
// 
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(hobby.hobbies);
// isMarried: True;
// 
// const city = "Lincoln";
// const houseNumber = "32";
// const state = "Nebraska";
// const street = " Washington";
// 
// function userInformation = (a = (`First Name: $(firstName)`)), (b = (`Last Name: $(lastName)`)),
//  (c= (`Age: $(age)`)),(d=(`Hobbies: (hobby $(hobbies)`)), (e = (`Relationships $(isMarried)`));
//   {
    //  return (a+b+a+c+d+e)
//   }
// 
// console.log(userInformation)
// console.log(hobbies[index]);
//// 2. Instruction
let x = 5; 
let y = 20;
let a = x+y;

console.log(a);

let p = (x += y);
console.log(p);

let z = (x -= y);
console.log(z);

let e = (x *= y);
console.log(e);

let f = (x /= y);
console.log(f);
// 
// let z = (x -= y);
// console.log(z);

        let i =0;
        while (i <=5) {
       console.log(i+1);
       i++;
       let j=0;
        while (j <= 5)
       {
         console.log(j+1)
        j++;
      }
      }

          let m =10;
          while (m >= 5) {
          console.log(m-1);
          m--;
          let n=0;
          while (n >= 10)
          {
           console.log(n-1)
          n--;
          }
          }
 ////////////////////////////////////////////////////////////     
 /* 3. Instruction
    let color = prompt ("Guest my favorite color:");
 
     function MyFavoriteColor(color){ 
     switch (color.toLowerCase()){
       case color ='black':
       alert( color + " _ color is accepted" );
       break;
       case color = 'violet':
       alert (color + " _ color is accepted" );
       break;
       case color = 'pink':
       alert (color + " _ color is accepted");
       break; 
    default:
      alert ("Guest again");  
       }
       return(color);
       }
   MyFavoriteColor(color);    
*/
   /////////////////////////////////////////////////////////
////// 4.) Instruction
/*
   let num = prompt ("Enter A Number:");
   function oddEven (num) 
   {
 
  if (num % 2 == 0) 
  {
  console.log(num + "_ Even Number")
 }
 else if (num % 2 == 1)
     {alert ( num + " _ Odd Number")}

  else {
    console.log (num + "_unexpected input");
 }
 return (num)
 }
 oddEven(num);
 */
// //////////////////
 
/// 5. Instruction

for( i = 20; i >= 0; i--) {
    console.log(i);
}

              
///6. Instruction 

// let givNum = prompt ("Give me a number:");
// function typeNumber (givNum) 
// {
// 
// if (givNum <= 50) 
// {
// console.log(`Currently a number ${givNum} . Terminate loop`)
// }
// else if (givNum % 10 == 0)
// {return(givNum)}
// else {
//  console.log (givNum + "_unexpected input");
// }
// return (givNum)
// }
// typeNumber(givNum);
 
// 7 Instruction

const userPass = 'discovery';
const userName = 'student@mail.com';
let inputPass = prompt('Enter a username or email:');

while (inputPass != userName ) {
    inputPass = prompt(`Enter a username or email::`);
}

    
   
             let inputPass2 = prompt('Enter a password:');       
             let counter = 0;
            while (inputPass2 != userPass && ++counter < 3) {
                inputPass2 = prompt(`Login Failed Now Only ${counter} Login Attempts Available:`);
            }
               
            if (counter == 3) {
                alert('Your account has been blocked!');
            } else {
                alert('SuccessFully Login');
            }  