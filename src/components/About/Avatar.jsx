import avt from "../../assets/images/cat.jpg";

function Avatar() {
  return (
    <div className="flex justify-center">
      <div className="relative w-9/12">
        <span className="absolute w-full h-full bg-indigo-500 -translate-x-4 -translate-y-4 desktop:-translate-x-5 desktop:-translate-y-5"></span>
        <img src={avt} alt="avatar" className="translate-x-4 translate-y-4 desktop:translate-x-5 desktop:translate-y-5" />
      </div>
    </div>
  );
}

export default Avatar;
