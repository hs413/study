const include = "d, a, ,b";
const exclude = "ddd, ,e, da,  b   ,  qwg";


const commaSeparatedStrToArray = (words) => {
  return words.split(",")
  .map(r => r.trim())
  .filter(Boolean);
}

const inc = commaSeparatedStrToArray(include);
const exc = new Set(commaSeparatedStrToArray(exclude));

if (inc.some(r => exc.has(r))) {
  console.log('nope')
}





