// import PropTypes from "prop-types";
import logoFooter from "/src/assets/logo-footer.png";
const Footer = () => {
  return (
    <>
      <div className="mt-[15rem] text-white">
        <div className="flex justify-center">
          <img src={logoFooter} alt="" />
        </div>
        <div className="my-[5rem] flex flex-col justify-center">
          <div className="max-w-screen-2xl mx-auto lg:flex lg:justify-between justify-center">
            <div>
              <h2 className="text-[1.5rem] my-5 text-center">About Us</h2>
              <p className="text-[1rem] text-[#FFFFFF99]">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="lg:flex lg:justify-between justify-center items-center">
              <div className="mx-[3rem]">
                <h2 className="text-[1.5rem] text-center">Quick Links</h2>
                <div className="text-[#FFFFFF99] text-center">
                  <li className="my-[2rem]">Home</li>
                  <li className="my-[2rem]">Services</li>
                  <li className="my-[2rem]">About</li>
                  <li className="my-[2rem]">Contact</li>
                </div>
              </div>
              <div className="mx-[5rem] text-center">
                <h2 className="text-[1.5rem] my-5">Subscribe</h2>
                <p className="text-[#FFFFFF99] my-5">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <div className="flex items-center my-10 justify-center">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-l-lg py-3 px-5 outline-none"
                    />
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-pink-400 to-orange-400 px-5 py-3 rounded-r-lg font-bold text-black">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gray-700" />
          <div className="text-center">
            <p className="text-[#FFFFFF99] my-5">
              @2024 Your Company All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// footer.propTypes = {};

export default Footer;
