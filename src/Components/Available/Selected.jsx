import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ Player, HandleRemovePlayer }) => {
  if (!Player || Object.keys(Player).length === 0) {
    return console.log("No players selected");
  }

  const { name, image, player_role } = Player;
  return (
    <>
      <div className="mt-[2rem]">
        <div className="flex border border-gray-300 p-5 justify-between items-center">
          <div className="flex ">
            <img src={image} alt={name} className="w-24 h-24 rounded-lg" />
            <div className="flex justify-between">
              <div className="ml-5">
                <h2 className="text-lg font-bold my-2">{name}</h2>
                <p className="text-sm text-gray-600">{player_role}</p>
              </div>
            </div>
          </div>

          <div>
            <MdDeleteForever
              className="text-5xl text-red-500 cursor-pointer opacity-60"
              onClick={() => HandleRemovePlayer(Player)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Selected.propTypes = {
  Player: PropTypes.object,
  HandleRemovePlayer: PropTypes.func,
};

export default Selected;
