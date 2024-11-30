import PropTypes from "prop-types";
import Available from "./Available";
import Selected from "./Selected";

const AvailableContrainer = ({
  HandleIsAvailable,
  IsAvailable,
  HandleAddPlayer,
  AddPlayer,
}) => {
  return (
    <>
      <div>
        <div className="flex justify-between md:mx-5">
          <div>
            {IsAvailable.isAvailable ? (
              <div className="text-[#131313] font-semibold text-[1.8rem]">
                Available Players
              </div>
            ) : (
              <div className="text-[#131313] font-semibold text-[1.8rem] ">
                Selected Player ({AddPlayer.length}/6)
              </div>
            )}
          </div>
          <div className="">
            <button
              className={`${
                IsAvailable.isAvailable
                  ? "rounded-l-lg border border-gray-100 p-3 shadow-sm bg-[#E7FE29]"
                  : "rounded-l-lg border border-gray-100 p-3 shadow-sm"
              }`}
              onClick={() => HandleIsAvailable("available")}
            >
              Available
            </button>
            <button
              className={`${
                IsAvailable.isAvailable
                  ? "rounded-r-lg border border-gray-100 p-3 shadow-sm"
                  : "rounded-r-lg border border-gray-100 p-3 shadow-sm bg-[#E7FE29]"
              }`}
              onClick={() => HandleIsAvailable("unavailable")}
            >
              Selected ({AddPlayer.length})
            </button>
          </div>
        </div>
        {IsAvailable.isAvailable ? (
          <Available />
        ) : (
          <Selected HandleAddPlayer={HandleAddPlayer} />
        )}
      </div>
    </>
  );
};

AvailableContrainer.propTypes = {
  HandleIsAvailable: PropTypes.func.isRequired,
  IsAvailable: PropTypes.object.isRequired,
  HandleAddPlayer: PropTypes.func,
  AddPlayer: PropTypes.array,
};

export default AvailableContrainer;
