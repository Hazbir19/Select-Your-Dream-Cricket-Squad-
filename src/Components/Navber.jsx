import PropTypes from "prop-types";
import Logo from "/src/assets/logo.png";

import { ImCoinDollar } from "react-icons/im";
const Navber = ({ CoinValue }) => {
  return (
    <>
      <div className="flex lg:justify-around md:justify-evenly justify-between items-center w-full  sticky top-0 bg-white bg-opacity-30 backdrop-blur-md lg:p-[3.5rem] h-[3.5rem] mt-5 m">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-between items-center">
          {/* list items div */}
          <div className="lg:flex md:flex list-none gap-5 text-[1rem] text-[#131313B3] font-bold hidden ">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </div>
          {/* coin div */}
          <div className="border border-gray-100 flex ml-5 p-2 rounded-lg shadow-sm ">
            <p className="mx-2 text-[#131313B3] font-bold">{CoinValue}</p>
            <p className="text-[#131313B3] font-bold">Coin</p>
            <ImCoinDollar className="text-2xl text-orange-400 ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

Navber.propTypes = {
  CoinValue: PropTypes.number.isRequired,
};

export default Navber;
