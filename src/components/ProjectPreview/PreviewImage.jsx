function PreviewImage({ image }) {
  return (
    <li className="w-10/12 tablet:w-full pb-10 tablet:pb-14 tablet:px-7">
      <img src={image} alt="Preview image" className="rounded-md shadow-3xl" />
    </li>
  );
}

export default PreviewImage;
