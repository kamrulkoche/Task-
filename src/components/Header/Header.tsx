import logo1 from "../../../public/image/logo1.png";
import logo2 from "../../../public/image/logo2.png";
import Picture from "../Picture/Picture";

const Header = () => {
  return (
    <div className="pt-4 bg-second-100">
      <div className="container mx-auto px-4 lg:px-24 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left content */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-center gap-2 mb-4">
            <Picture image={logo2} width={30} height={30} />
            <p className="text-third-100 text-sm sm:text-base lg:text-sm font-normal">Available in select states</p>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-snug">
              Everything <span className="text-first-100">You Need,</span><br className="hidden sm:block" /> All in One Place
            </h2>
          </div>

          <button className="text-white bg-first-100 text-sm font-medium px-6 py-2 rounded-3xl">
            Shop Now
          </button>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Picture image={logo1} width={300} height={300} className="w-full max-w-xs sm:max-w-md lg:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
