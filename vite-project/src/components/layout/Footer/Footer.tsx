import React from "react";
import style from "./Footer.module.css";
const Footer: React.FC = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.xitoy}>
        <div>
          <div className={style.wf}>Sign Up To Our Newsletter.</div>
          <div className={style.vf}>
            Be the first to hear about the latest offers.
          </div>
        </div>
        <div className={style.sff}>
          <input
            className={style.footerInput}
            type='text'
            placeholder='Your Email'
          />
          <button className={style.footerButton}>Subscribe</button>
        </div>
      </div>
      <div className={style.flexBolishik}>
        {" "}
        <div className='w-[168px]'>
          <span className='text-white text-opacity-50 text-sm font-bold font-Poppins  leading-[14px]'>
            Information
            <br />
          </span>
          <span className='text-white text-sm font-bold font-Poppins leading-[14px]'>
            <br />
          </span>
          <span className='text-white text-[13px] font-normal font-Poppins leading-[18.20px]'>
            About Us
            <br />
            About Zip
            <br />
            Privacy Policy
            <br />
            Search
            <br />
            Terms
            <br />
            Orders and Returns
            <br />
            Contact Us
            <br />
            Advanced Search
            <br />
            Newsletter Subscription
          </span>
        </div>
        <div className='w-[230px]'>
          <span className="text-white text-opacity-50 text-sm font-bold font-['Poppins'] leading-[14px]">
            PC Parts
            <br />
            <br />
          </span>
          <span className="text-white text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            CPUS
            <br />
            Add On Cards
            <br />
            Hard Drives (Internal)
            <br />
            Graphic Cards
            <br />
            Keyboards / Mice
            <br />
            Cases / Power Supplies / Cooling
            <br />
            RAM (Memory)
            <br />
            Software
            <br />
            Speakers / Headsets
            <br />
            Motherboards
          </span>
        </div>
        <div className='w-[136px]'>
          <span className="text-white text-opacity-50 text-sm font-bold font-['Poppins'] leading-[14px]">
            Desktop PCs
            <br />
          </span>
          <span className="text-white text-sm font-bold font-['Poppins'] leading-[14px]">
            <br />
          </span>
          <span className="text-white text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            Custom PCs
            <br />
            Servers
            <br />
            MSI All-In-One PCs
            <br />
            HP/Compaq PCs
            <br />
            ASUS PCs
            <br />
            Tecs PCs
          </span>
        </div>
        <div className='w-[188px]'>
          <span className="text-white text-opacity-50 text-sm font-bold font-['Poppins'] leading-[14px]">
            Laptops
            <br />
          </span>
          <span className="text-white text-sm font-bold font-['Poppins'] leading-[14px]">
            <br />
          </span>
          <span className="text-white text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            Evryday Use Notebooks
            <br />
            MSI Workstation Series
            <br />
            MSI Prestige Series
            <br />
            Tablets and Pads
            <br />
            Netbooks
            <br />
            Infinity Gaming Notebooks
          </span>
        </div>
        <div className='w-[301px]'>
          <span className="text-white text-opacity-50 text-sm font-bold font-['Poppins'] leading-[14px]">
            Address
            <br />
          </span>
          <span className="text-white text-sm font-bold font-['Poppins'] leading-[14px]">
            <br />
          </span>
          <span className="text-white text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            Address: 1234 Street Adress City Address, 1234
            <br />
            Phones:{" "}
          </span>
          <span className="text-sky-500 text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            (00) 1234 5678
            <br />
          </span>
          <span className="text-white text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            We are open: Monday-Thursday: 9:00 AM - 5:30 PM
            <br />
            Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 11:00 AM - 5:00 PM
            <br />
            E-mail:{" "}
          </span>
          <span className="text-sky-500 text-[13px] font-normal font-['Poppins'] leading-[18.20px]">
            shop@email.com
          </span>
        </div>
      </div>
      <div className={style.fsd} />
    </footer>
  );
};

export default Footer;
