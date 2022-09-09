import SearchIcon from "../assets/search.svg";
const Hero = () => {
  return (
    <div className="flex flex-col bg-hero-cover bg-center bg-cover w-full md:h-[36rem] h-96 justify-center items-center">
      <div className="text-2xl md:text-4xl text-slate-50  font-['NeueMedium'] w-5/6 md:w-3/5 lg:w-2/5 xl:w-1/3 text-center subpixel-antialiased">
        Explore the world best leading design portfolio
      </div>
      <div className="text-lg py-2 md:text-xl  text-slate-50 w-5/6 md:w-3/5 lg:w-2/5 xl:w-1/3 text-center subpixel-antialiased">
        The internet's source of freely-usable images.
      </div>
      <div className="hidden md:block w-1/2 xl:w-2/5  py-4">
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="flex items-center ">
            <div className="flex absolute items-center pl-3 w-8 pointer-events-none">
              <img src={SearchIcon} alt="SearchIcon" />
            </div>
            <input
              type="search"
              id="default-search"
              className="flex p-4 pl-10 w-full text-sm text-gray-800 bg-gray-200 focus:bg-gray-50 hover:bg-gray-50 rounded-full border border-solid outline-none"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Hero;
