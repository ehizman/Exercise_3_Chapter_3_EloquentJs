function countChar (word, char) {
  console.log ('function called');
  let numOfchar = 0;
  for (let count = 0; count<word.length; count++) 
   {
     console.log('for loop entered');
     if (word[count] === char)
       {
         numOfchar++;
         }
     }
   return (numOfchar);
}

let word = String (prompt ('Enter a word'));
console.log (word.length);
let char = String (prompt ('Enter a character to search for'));
console.log ("There are "+ countChar(word, char)+ " " + char + ' in ' + word);

     