import PreviewImage from "./PreviewImage";

export default function getCol(getImgItems, previewImg, amountEachCol, amountOfCol) {
  const cols = [];

  for (let i = 0; i < amountOfCol; i++) {
    const currCol = i + 1;
    cols.push(
      getImgItems(previewImg, amountEachCol, currCol).map((img, i) => {
        return <PreviewImage image={img} key={i} />;
      })
    );
  }

  return cols;
}