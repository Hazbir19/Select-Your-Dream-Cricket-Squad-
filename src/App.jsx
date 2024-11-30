import { useEffect, useState } from "react";
import HeroSection from "./Components/HeroSection";
import Navber from "./Components/Navber";
import Available from "./Components/Available/Available";
import AvailableContrainer from "./Components/Available/AvailableContrainer";
import Newletter from "./Components/Newletter";
import Footer from "./Components/Footer";
import Selected from "./Components/Available/Selected";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [coinValue, setcoinValue] = useState(0);
  const [IsAvailable, setIsAvailable] = useState({
    isAvailable: true,
    status: "available",
  });
  const [Players, setPlayers] = useState([]);
  // Is Available Function
  const HandleIsAvailable = (status) => {
    if (status === "available") {
      setIsAvailable({ isAvailable: true, status: "available" });
    } else {
      setIsAvailable({ isAvailable: false, status: "unavailable" });
    }
  };
  // Add_player_State
  const [AddPlayer, SetAddPlayer] = useState([]);
  // Add_player_Function
  const HandleAddPlayer = (Player) => {
    if (AddPlayer.find((addplayer) => addplayer.name === Player.name)) {
      toast.error("Player already exist");
      return;
    }
    if (AddPlayer.length >= 6) {
      toast.warning(" You Can Only select up to 6 player");
      return;
    }
    const marketPrice = parseInt(Player.market_price);
    if (coinValue >= marketPrice) {
      setcoinValue(coinValue - marketPrice);
      const NewPlayer = [...AddPlayer, Player];
      SetAddPlayer(NewPlayer);
      toast.success(`${Player.name} Added your Squard !`);
    } else {
      toast.error("Not enough coins to add this player");
    }
  };
  const HandleRemovePlayer = (Player) => {
    const marketPrice = parseInt(Player.market_price);

    SetAddPlayer((prePlayer) =>
      prePlayer.filter((player) => player.name !== Player.name)
    );
    setcoinValue(coinValue + marketPrice);
    toast.warning(`${Player.name} Removed from your Squard !`);
  };

  useEffect(() => {
    fetch("Players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <Navber CoinValue={coinValue} />
      <div className="lg:max-w-screen-xl lg:mx-auto my-[10rem] flex flex-col justify-center overflow-hidden">
        <HeroSection CoinValue={coinValue} setFunction={setcoinValue} />
        <AvailableContrainer
          HandleIsAvailable={HandleIsAvailable}
          IsAvailable={IsAvailable}
          HandleAddPlayer={HandleAddPlayer}
          AddPlayer={AddPlayer}
        />
        {IsAvailable.isAvailable ? (
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gird grid-cols-1 justify-center items-center gap-5 mt-[5rem] mb-[20rem]">
            {IsAvailable.isAvailable &&
              Players.map((Player, idx) => (
                <Available
                  key={idx}
                  Player={Player}
                  HandleAddPlayer={HandleAddPlayer}
                />
              ))}
          </div>
        ) : (
          <div>
            {AddPlayer.map((Player, idx) => (
              <Selected
                key={idx}
                Player={Player}
                HandleRemovePlayer={HandleRemovePlayer}
              />
            ))}
            <button
              className="text-xl font-bold my-[3rem] rounded-r-lg border border-gray-100 p-3 shadow-sm bg-[#E7FE29] mx-5"
              onClick={() => HandleIsAvailable("available")}
            >
              Add more Plyer
            </button>
          </div>
        )}
      </div>
      <footer className="bg-black  relative p-5">
        <Newletter />
        <Footer />
      </footer>
      <ToastContainer autoClose={2000} position="top-center" />
    </>
  );
}

export default App;
