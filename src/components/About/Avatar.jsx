import avt from "../../assets/images/cat.jpg";

function Avatar() {
  return (
    <div className="flex justify-center">
      <div className="relative w-9/12">
        <span className="absolute w-full h-full bg-slate-300 -translate-x-3 -translate-y-3"></span>
        <img src={avt} alt="avatar" className="translate-x-3 translate-y-3" />
      </div>
    </div>
  );
}

export default Avatar;
