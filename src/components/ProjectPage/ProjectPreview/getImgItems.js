function getImgItems(data, amountEachCol, col) {
  const imgs = [];
  data.forEach((img, i) => {
    const iOrder = i + 1;
    if (col - 1 < iOrder / amountEachCol && iOrder / amountEachCol <= col) {
      imgs.push(img);
    }
  });
  return imgs;
}

export default getImgItems;
