function PreviewImageList({ imageItems }) {
  return (
    <ul className="pt-10 tablet:flex">
      {imageItems.map((col, index) => {
        return (
          <li key={index} className="tablet:w-2/4">
            <ul className="flex justify-center flex-wrap">{col}</ul>
          </li>
        );
      })}
    </ul>
  );
}

export default PreviewImageList;
