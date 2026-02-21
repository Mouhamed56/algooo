
function sommeElementsDistincts(ensemble1, ensemble2) {
  let somme = 0;
  
  for (let i = 0; i < ensemble1.length; i++) {
    let elementPresent = false;
    for (let j = 0; j < ensemble2.length; j++) {
      if (ensemble1[i] === ensemble2[j]) {
        elementPresent = true;
        break;
      }
    }
    if (!elementPresent) {
      somme += ensemble1[i];
    }
  }
  
  for (let i = 0; i < ensemble2.length; i++) {
    let elementPresent = false;
    for (let j = 0; j < ensemble1.length; j++) {
      if (ensemble2[i] === ensemble1[j]) {
        elementPresent = true;
        break;
      }
    }
    if (!elementPresent) {
      somme += ensemble2[i];
    }
  }
  
  return somme;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const resultat = sommeElementsDistincts(set1, set2);
console.log("Somme des éléments distincts :", resultat);


function dot_product_procedure(v1, v2, ps) {
  ps.value = 0;
  for (let i = 0; i < v1.length; i++) {
    ps.value += v1[i] * v2[i];
  }
}

function verifierOrthogonaliteProcedure(couplesVecteurs) {
  for (let k = 0; k < couplesVecteurs.length; k++) {
    const couple = couplesVecteurs[k];
    const v1 = couple.v1;
    const v2 = couple.v2;
    let ps = { value: 0 };
    dot_product_procedure(v1, v2, ps);
    if (ps.value === 0) {
      console.log(`Couple ${k+1} : Les vecteurs sont orthogonaux (ps = ${ps.value})`);
    } else {
      console.log(`Couple ${k+1} : Les vecteurs ne sont pas orthogonaux (ps = ${ps.value})`);
    }
  }
}


function dot_product_fonction(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function verifierOrthogonaliteFonction(couplesVecteurs) {
  for (let k = 0; k < couplesVecteurs.length; k++) {
    const couple = couplesVecteurs[k];
    const v1 = couple.v1;
    const v2 = couple.v2;
    const ps = dot_product_fonction(v1, v2);
    if (ps === 0) {
      console.log(`Couple ${k+1} : Les vecteurs sont orthogonaux (ps = ${ps})`);
    } else {
      console.log(`Couple ${k+1} : Les vecteurs ne sont pas orthogonaux (ps = ${ps})`);
    }
  }
}

console.log("\n=== Version procédure ===");
const couplesVecteurs1 = [
  { v1: [1, 2, 3], v2: [4, -8, 4] },
  { v1: [2, 4, 6], v2: [1, 2, 3] },
  { v1: [0, 5, 0], v2: [3, 0, 7] }
];
verifierOrthogonaliteProcedure(couplesVecteurs1);

console.log("\n=== Version fonction ===");
const couplesVecteurs2 = [
  { v1: [1, 2, 3], v2: [4, -8, 4] },
  { v1: [2, 4, 6], v2: [1, 2, 3] },
  { v1: [0, 5, 0], v2: [3, 0, 7] }
];
verifierOrthogonaliteFonction(couplesVecteurs2);