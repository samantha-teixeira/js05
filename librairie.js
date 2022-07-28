function sommeTableau(schimlick)
{
    let total = 0
for (let index = 0; index < schimlick.length; index++) {
    total += schimlick [index];
}
return total;
}
function calculMoyenne(machin) {
    return sommeTableau(machin) / machin.length;
}
