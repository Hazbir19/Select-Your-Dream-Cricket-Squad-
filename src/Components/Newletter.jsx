// import PropTypes from "prop-types";

const Newletter = () => {
  return (
    <>
      <div className="bg-white bg-opacity-30 backdrop-blur-sm p-5 max-w-screen-xl mx-auto rounded-xl absolute lg:left-[25rem] -top-20 lg:w-10/12 md:w-4/6 w-5/6 md:left-[10rem]">
        <div className="bg-white flex flex-col justify-center items-center bg-[url('/src/assets/bg-shadow.png')] p-5">
          <h1 className="lg:text-[2rem] text-md font-bold my-[2rem] md:text-xl ">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[#131313B3] text-xs md:text-lg my-[1rem]">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex items-center gap-5">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-100 rounded-lg py-3 px-5 outline-none"
              />
            </div>
            <div>
              <button className="bg-gradient-to-r from-pink-400 to-orange-400 px-5 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

// Newletter.propTypes = {};

export default Newletter;
