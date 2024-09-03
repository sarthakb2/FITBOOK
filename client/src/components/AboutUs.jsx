import React from "react";

export const AboutUs = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full h-screen">
      <div className="bg-white w-full h-screen relative">
        <div className="absolute w-full [font-family:'Outfit',Helvetica] font-bold text-fitbook text-[100px] text-center tracking-[2.50px] leading-[75.0px] whitespace-nowrap">
          About Us
        </div>
        <p className="absolute w-[664px] ] [font-family:'Outfit',Helvetica] font-normal text-transparent text-[28px] text-center tracking-[0.98px] leading-[36.1px]">
          <span className="font-medium text-[#6ebbcf] tracking-[0.27px]">Welcome to </span>
          <span className="font-bold text-[#6ebbcf] tracking-[0.27px]">FITBOOK</span>
          <span className="font-medium text-[#6ebbcf] tracking-[0.27px]">
            .<br />
            <br />
            <br />
          </span>
          <span className="font-medium text-black tracking-[0.27px]">At </span>
          <span className="font-bold text-black tracking-[0.27px]">FITBOOK</span>
          <span className="font-medium text-black tracking-[0.27px]">
            , we’re dedicated to bringing you closer to your fitness goals and sports passions. Whether you’re an
            athlete, a fitness enthusiast, or someone just starting their wellness journey, our platform is designed to
            inspire, educate, and support you every step of the way.
          </span>
        </p>
        <div className="absolute w-[492px] top-[911px] left-[1035px] rotate-[-0.30deg] [font-family:'Outfit',Helvetica] font-bold text-fitbook text-[100px] tracking-[2.50px] leading-[75.0px] whitespace-nowrap">
          contact us
        </div>
        <div className="absolute w-[1131px] h-[410px] top-[1098px] left-[718px]">
          <div className="absolute w-[385px] top-[49px] left-0 [font-family:'Outfit',Helvetica] font-medium text-black text-[43px] text-right tracking-[3.23px] leading-[39.6px] whitespace-nowrap">
            Contact Us Today
          </div>
          <div className="absolute w-[268px] top-0 left-0.5 [font-family:'Outfit',Helvetica] font-medium text-black text-[29px] tracking-[2.17px] leading-[26.7px]">
            GET IN TOUCH
          </div>
          <div className="absolute w-[190px] top-[100px] left-px [font-family:'Outfit',Helvetica] font-medium text-black text-[28px] text-right tracking-[0.98px] leading-[64.3px] whitespace-nowrap">
            HEAD OFFICE
          </div>
          <div className="absolute w-[572px] h-[247px] top-[163px] left-5">
            <p className="absolute w-[488px] top-0 left-[82px] [font-family:'Outfit',Helvetica] font-medium text-black text-[28px] tracking-[0.98px] leading-[64.3px]">
              <span className="tracking-[0.27px]">
                PIET, Samalkha, Panipat(132101)
                <br />
                fitbook.piet
              </span>
              <a href="mailto:fitbook.piet@gmail.com" rel="noopener noreferrer" target="_blank">
                <span className="tracking-[0.27px] underline">
                  @gmail.com
                  <br />
                </span>
              </a>
              <span className="tracking-[0.27px]">
                +91 9122017831 / +91 9817845939
                <br />
                10:00 - 18:00, Mon - Sat
              </span>
            </p>
            <img
              className="absolute w-[54px] h-12 top-1.5 left-0 object-cover"
              alt="Map"
              src="/img/icons8-map-50-1.png"
            />
            <img
              className="absolute w-[54px] h-12 top-[68px] left-0 object-cover"
              alt="Email"
              src="/img/icons8-email-50-1.png"
            />
            <img
              className="absolute w-[54px] h-12 top-[130px] left-0 object-cover"
              alt="Phone"
              src="/img/icons8-phone-50-1.png"
            />
            <img
              className="absolute w-[54px] h-12 top-48 left-0 object-cover"
              alt="Clock"
              src="/img/icons8-clock-50-1.png"
            />
          </div>
          <a
            className="absolute w-[517px] h-[409px] top-px left-[608px] bg-[url(/static/img/basemap-image.png)] bg-[100%_100%]"
            href="https://maps.app.goo.gl/rL4KcR4tQNSxQpKB8"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute w-[45px] h-[47px] top-[159px] left-[243px] object-cover"
              alt="Pin"
              src="/img/pin.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
