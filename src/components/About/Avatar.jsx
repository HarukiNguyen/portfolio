import avt from "../../assets/images/cat.jpg";

function Avatar() {
  return (
    <div className="py-10 flex justify-center">
      <div className="relative w-9/12 before:absolute before:w-full before:h-full before:bg-slate-300 before:-translate-x-1 before:-translate-y-1">
        <img src={avt} alt="avatar" className="translate-x-3 translate-y-3" />
      </div>
    </div>
  );
}

export default Avatar;
