import React from "react";
import "../styles/PreNavbar.css";
const cartIcon = (
  <svg
    className="temp"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 0 24 24"
    width="20px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);
const hambergerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    {" "}
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);
const PreNavbar = () => {
  // const toggleHumberger = () => {
  //     const [toggle, setToggle] = useState(false)
  // }
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/in/">MI India</a>
        <span> | </span>
        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>
        <span> | </span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          ONLINE HELP
        </a>
        <span> | </span>
        <a href="https://www.mi.com/in/service/authorized_stores/ ">
          RETAIL STORE
        </a>
        <span> | </span>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span></span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SIGN UP
        </a>
        <span></span>
        <a href="https://store.mi.com/in/site/login">{cartIcon} CART (0)</a>
        <div>
          {/* <button className="humberger" onClick={toggleHumberger}> */}
            {hambergerIcon}
            {/* {
              toggleHumberger?   <div>
              <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span></span>
              <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
                SIGN UP
              </a>
              <span></span>
              <a href="https://store.mi.com/in/site/login">{cartIcon} CART (0)</a></div>:""}
          </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default PreNavbar;
