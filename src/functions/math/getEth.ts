/* eslint-disable no-plusplus */
function getEth(num:number, num2:number) {
  const ress = (num * 100) / num2;
  if (!Number.isInteger(ress)) {
    const str = ress.toString();
    const forlength = str.slice(str.indexOf('.') + 1);
    let step = 0;
    for (let i = 0; i < forlength.length; i++) {
      step++;
      if (forlength[i] !== '0') break;
    }

    return ress.toFixed(step);
  }

  return ress.toFixed(2);
}

export default getEth;
