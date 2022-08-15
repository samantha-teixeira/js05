function sommeTableau(tab) {
    let total = 0
    for (let index = 0; index < tab.length; index++) {
        total += tab[index];
    }
    return total;
}
function calculMoyenne(machin) {
    return sommeTableau(machin) / machin.length;
}

function palindrome(tab) {
    let resultat = true;
    for (let index = 0; index < tab.length; index++) 
    {
        if (tab[index] == tab[tab.length - 1 -index]) {
        }
        else
        resultat = false;
    }
     return resultat;
}

function palindrome2(tab) {
    let tableauInverse = tab.slice().reverse();
    return (JSON.stringify(tab) == JSON.stringify(tableauInverse))
}

function ordreCroissant (tab) {
    let resultat = true;
    for (let index = 1; index < tab.length; index++) {
        
        if (tab[index -1] <= tab[index]){
            
        }
        else ///  (tab[index -1] > tab[index])
        resultat = false;
        /*if (tab[index -1] > tab[index]){
            resultat = false;
        }
        */
    }
    return resultat
}

function ordreCroissant2 (tab) {
    let resultat = true;
    for (let index = 0; index < tab.length-1; index++) 
        if (tab[index] <= tab[index+1]){

        }
        else{
        resultat = false;
    }
    return resultat
}