import MarioImage from "../icons/Mario100.jpeg";
import SuperMarioLogo from "../icons/SuperMarioLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  const sectionStyle = {
    backgroundImage: `url(${MarioImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full h-[500px]" style={sectionStyle}>
      <div className="p-[120px] flex flex-col gap-[22px]">
        <img src={SuperMarioLogo} alt="superMario" className="w-[100px]" />
        <h1 className="text-[32px] font-semibold">March 10th is "MAR10 Day"</h1>
        <div className="w-[380px] text-[18px] font-medium">
          Check out our offers and get Double Points on LEGO® Super Mario™ sets,
          3/4-3/11.*
        </div>
        <div className="flex gap-4">
      <button className="bg-black text-white font-medium hover:bg-white hover:text-black py-2 px-4 rounded flex items-center">
        Shop Now
        <FontAwesomeIcon icon={faAngleRight} className="w-5 h-5 ml-2 pt-1" />
      </button>
      <button className="bg-black text-white font-medium hover:bg-white hover:text-black py-3 px-4 rounded flex items-center">
        Become a Member
        <FontAwesomeIcon icon={faAngleRight} className="w-5 h-5 ml-2 pt-1" />
      </button>
    </div>
      </div>
    </section>
  );
}

export default Banner;
