import PropTypes from "prop-types";
import BannerMain from "/src/assets/banner-main.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSection = ({ CoinValue, setFunction }) => {
  const handleFreeCredit = () => {
    let newCoinValue = CoinValue + 1500000;
    setFunction(newCoinValue);
    toast.success("Credit Added Your Account !");
  };
  return (
    <>
      <div className=" bg-black my-[5rem] rounded-xl text-white md:mx-5">
        <div className="bg-[url('/src/assets/bg-shadow.png')] bg-cover rounded-xl">
          <div className="flex justify-center my-6">
            <img className="mt-[4rem]" src={BannerMain} alt="" />
          </div>
          <div className=" p-5">
            <h1 className="my-6 text-5xl text-center">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-[#FFFFFFB3] text-xl p-2 my-[2.5rem] text-center">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="flex justify-center ">
              <button
                className="ring-2 ring-[#E7FE29] ring-offset-4 bg-[#E7FE29] text-black ring-offset-black rounded-xl p-2 my-[2.5rem]"
                onClick={handleFreeCredit}
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HeroSection.propTypes = {
  CoinValue: PropTypes.number.isRequired,
  setFunction: PropTypes.func.isRequired,
};

export default HeroSection;
