let tableauAge = [1,32,32];
let tableauNote =[1,2,3];
let tableauScorePatinageArtistique=[4,8,0,8,4];

console.log(sommeTableau(tableauAge));
console.log(sommeTableau(tableauNote));
console.log(sommeTableau(tableauScorePatinageArtistique));


let ageMoyen = calculMoyenne(tableauAge);

console.log (ageMoyen.toFixed(2));

console.log (palindrome(tableauAge));

console.log (palindrome (tableauNote));

console.log(palindrome(tableauScorePatinageArtistique));

console.log(palindrome2(tableauAge));

console.log(palindrome2(tableauNote));

console.log(ordreCroissant(tableauNote));

console.log(ordreCroissant(tableauScorePatinageArtistique));

console.log(ordreCroissant2(tableauNote));

console.log(ordreCroissant2(tableauScorePatinageArtistique));