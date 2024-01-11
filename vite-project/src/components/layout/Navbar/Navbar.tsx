import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import facebook from "../../../../public/mock-images/svg/facebook.svg";
import ins from "../../../../public/mock-images/svg/instagram.svg";
import LOGO from "../../../../public/mock-images/svg/LOGO.svg";
interface NavbarItem {
  text: string;
  url: string;
}
const NavbarContents: NavbarItem[] = [
  { text: "Laptops", url: "/#1" },
  { text: "Desktop PCs", url: "/#2" },
  { text: "Networking Devices", url: "/#3" },
  { text: "Printers & Scanners", url: "/#4" },
  { text: "PC Parts", url: "/#5" },
  { text: "All Other Products", url: "/#6" },
  { text: "Repairs", url: "/#7" },
];

const Navbar: React.FC = () => {
  return (
    <div className={style.kerakli}>    <div className={style.all}>
    <div className={style.top}>
      <p className={style.amPm}>
        <span className={style.monThu}>Mon-Thu:</span> 9:00 AM - 5:30 PM
      </p>
      <p className={style.visitOur}>
        Visit our showroom in 1234 Street Adress City Address, 1234{" "}
        <span className={style.visitOurContact}>
          {" "}
          <Link to='/contact'>Contact Us</Link>
        </span>
      </p>
      <div className={style.imgesAndNames}>
        <p>Call Us: (00) 1234 5678</p> <img src={facebook} alt='' />
        <img src={ins} alt='' />
      </div>
    </div>
    <div className={style.navCon}>
      <nav className={style.navB}>
        <img src={LOGO} alt='' />
        <ul className={style.ulName}>
          {NavbarContents.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={style.liName}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <button className={style.navButton}>Our Details</button>
        <div className={style.profileDiv}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
          >
            <path
              d='M4.95072 2.99141C3.79204 4.14838 3.11812 5.70363 3.06631 7.34023C3.0145 8.97682 3.58868 10.5716 4.67185 11.7995C5.75503 13.0275 7.26567 13.7962 8.89594 13.9491C10.4965 14.0991 12.0941 13.6444 13.3749 12.6766L16.7061 16.0085L16.7061 16.0085C16.789 16.0914 16.8873 16.1571 16.9955 16.2019C17.1038 16.2468 17.2198 16.2698 17.3369 16.2698C17.4541 16.2698 17.5701 16.2468 17.6783 16.2019C17.7866 16.1571 17.8849 16.0914 17.9678 16.0085C18.0506 15.9257 18.1163 15.8274 18.1611 15.7191C18.206 15.6109 18.229 15.4949 18.229 15.3777C18.229 15.2606 18.206 15.1446 18.1611 15.0363C18.1163 14.9281 18.0506 14.8298 17.9678 14.7469L17.9677 14.7469L14.636 11.416C15.6013 10.135 16.0539 8.53846 15.903 6.93943C15.7493 5.31054 14.9808 3.80139 13.7539 2.719C12.5269 1.63662 10.9337 1.06232 9.29838 1.11292C7.66303 1.16352 6.10838 1.83523 4.95072 2.99141ZM4.95072 2.99141L5.02138 3.06217L4.95072 2.99141ZM12.7887 4.25366C13.2263 4.68416 13.5743 5.19703 13.8127 5.76269C14.051 6.32835 14.175 6.93561 14.1775 7.54944C14.18 8.16327 14.061 8.77152 13.8272 9.3391C13.5935 9.90669 13.2497 10.4224 12.8156 10.8564C12.3816 11.2905 11.8659 11.6343 11.2983 11.868C10.7307 12.1018 10.1225 12.2208 9.50865 12.2183C8.89482 12.2158 8.28756 12.0918 7.7219 11.8535C7.15623 11.6151 6.64336 11.2671 6.21287 10.8295C5.35255 9.95509 4.87263 8.77613 4.87762 7.54944C4.88262 6.32275 5.37213 5.14773 6.23954 4.28033C7.10694 3.41292 8.28196 2.92341 9.50865 2.91841C10.7353 2.91342 11.9143 3.39335 12.7887 4.25366Z'
              fill='black'
              stroke='black'
              stroke-width='0.2'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <path
              d='M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z'
              fill='black'
            />
          </svg>
          <img
            className={style.profileImg}
            src='https://s3-alpha-sig.figma.com/img/d725/e5b3/8a36026aac78b3f0c168dc2abcf255c8?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjyQwvvgUoVkz3HG0-ZqV7S4jVAYb3fNLiTlbHxngd8viK5ZJ1AKcEHa6HJ5k06d7GOymL~8uLv6w2nHLU0oXsTLC95cxg-zPIB15L0PQ12NZrhvC1KSoU7PrHV4uUvlfTlnMLwMR4wVpAYnFhXfDMPHUICXLQYdxkKd71HEKy80dk5JJ3KHq522ujtTTRcVg8nGDnVbJEALO1q9sXCfbwqAK-krwrocqUMU-e02FPtfyQqe4XnL9oXP8bfPOcHIieXXBiZ1JhJPJjTSKlkxzQt9Ffg04jjDzLjdfJBVtfJkQUGsHUZuNcHvF~RExq~e~9xjKXWtCnku9uatlzPbGQ__'
            alt=''
          />
        </div>
      </nav>
    </div>
  </div></div>

  );
};

export default Navbar;
