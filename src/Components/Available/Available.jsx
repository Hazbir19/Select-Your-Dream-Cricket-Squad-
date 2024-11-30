import PropTypes from "prop-types";
import { IoPersonOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";

const Available = ({ Player, HandleAddPlayer }) => {
  if (!Player) {
    return null;
  }
  const {
    country,
    image,
    name,
    player_role,
    rating,
    batting_hand,
    market_price,
  } = Player;
  return (
    <>
      <div className="available bg-white p-5 shadow-sm border border-gray-100 rounded-lg my-5">
        <div className="p-5 flex justify-center items-center ">
          <img
            src={image}
            className="w-[30rem] h-[30rem] rounded-lg object-fill"
          />
        </div>
        <div className="available-info">
          <div className="flex items-center gap-2 my-3">
            <IoPersonOutline className="text-black  bg-blacktext-2xl" />
            <h2 className="text-xl text-[#131313] font-bold">{name}</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <FaFlag />
              <div>{country}</div>
            </div>
            <div className="bg-gray-200 p-1 px-2 rounded-lg text-[#131313]">
              {player_role}
            </div>
          </div>
          <hr className="bg-gray-50 my-5" />
        </div>
        <div className="text-md text-[#131313] font-bold my-2">
          Rating: {rating}
        </div>
        <div className="text-md text-[#131313] font-bold">{batting_hand}</div>
        <div className="flex items-center justify-between">
          <div className="text-md text-[#131313] font-bold">
            Price: $ {market_price}
          </div>
          <button
            className="bg-white shadow-sm border border-gray-100 rounded-lg text-md text-gray-500 font-medium  p-2"
            onClick={() => HandleAddPlayer(Player)}
          >
            Choose Player
          </button>
        </div>
      </div>
    </>
  );
};

Available.propTypes = {
  Player: PropTypes.object,
  HandleAddPlayer: PropTypes.func,
};

export default Available;
