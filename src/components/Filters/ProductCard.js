const ProductCard = ({ name, author, avatar, publisher, image }) => {
  return (
    <div className="col-span-4">
      <div className="relative rounded-lg text-white shadow shadow-slate-500 sm:flex-row bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.563em] z-50">
        <figure className={"p-3"}>
          <img src={image} alt={name} className=" w-full" />
        </figure>

        <div className="p-6">
          <header className="mb-4 text-white font-lato">
            <h3 className="text-2xl font-medium ">{name}</h3>
            <div className={"flex gap-4 mt-4"}>
              <a
                href="http://localhost:3000"
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                <img
                  src={avatar}
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <div>
                <p className="text-md">{author}</p>
                <p className="text-xs">{publisher}</p>
              </div>
            </div>
          </header>
          <div className={"w-full"}>
            <button
              className={
                "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold -skew-x-12 h-[2.751em] w-full hover:scale-105 transition-all delay-100"
              }
            >
              <div className={"skew-x-12"}>Live demo</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
