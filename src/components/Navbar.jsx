import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CloseIcon, CartIcon } from "./";
import menu from "../assets/icon-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisible } from "../slices/menuSlice";
import { useSpring, animated } from "@react-spring/web";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  const menuVisible = useSelector((state) => state.menu.isVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = Object.keys(cartItems).length;
  const dispatch = useDispatch();
  const menuAnimation = useSpring({
    left: menuVisible ? "0" : "-100%",
  });
  const menuAnimationDelay = useSpring({
    left: menuVisible ? "0" : "-100%",
    delay: 300,
  });

  function handleToggle() {
    if (menuVisible) dispatch(toggleVisible());
  }

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between h-[6rem] border-b-sec-200 border-b">
        <article className="flex items-center">
          <div className="md:mr-14 mr-0 flex items-center gap-4">
            <img
              src={menu}
              onClick={() => dispatch(toggleVisible())}
              className="smOnly cursor-pointer relative top-[0.1rem]"
              alt="Side bar"
            />
            <Link to="/">
              <img src={logo} alt="Sneakers logo" />
            </Link>
          </div>
          <animated.div
            style={menuAnimationDelay}
            className="navOverlay smOnly"
          ></animated.div>
          <animated.ul
            style={menuAnimation}
            className={`flex items-center justify-center max-md:bg-white z-[999999] md:z-50 top-0 fixed w-full h-full md:static`}
          >
            <div className="md:gap-8 justify-between h-full py-16 pt-5 w-full navGrid md:flex md:flex-row md:py-0">
              <li
                className="navLink smOnly noBefore"
                onClick={() => handleToggle()}
              >
                <CloseIcon class="fill-sec-400 transitionMe hover:fill-sec-400 scale-125 cursor-pointer" />
              </li>
              <li className="smOnly">
                <NavLink
                  className="navLink transitionMe"
                  to="/"
                  onClick={() => handleToggle()}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink transitionMe"
                  to="/collections"
                  onClick={() => handleToggle()}
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink transitionMe"
                  to="/men"
                  onClick={() => handleToggle()}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink transitionMe"
                  to="/women"
                  onClick={() => handleToggle()}
                >
                  Women
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="navLink transitionMe"
                  to="/about"
                  onClick={() => handleToggle()}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink transitionMe"
                  to="/contact"
                  onClick={() => handleToggle()}
                >
                  Contact
                </NavLink>
              </li>
            </div>
          </animated.ul>
        </article>
        <article className="flex items-center gap-4 sm:gap-8">
          <Link
            to="/cart"
            className="relative cursor-pointer fill-sec-300 gap-1 hover:fill-sec-400 flex text-sec-300 hover:text-sec-400 items-center font-bold"
          >
            <CartIcon class="transitionMe" />
            <div className="transitionMe text-xl">
              <span className="absolute -top-2 -right-2 text-white bg-primary-200 rounded-lg py-px px-2 text-xs">
                {cartItemsCount}
              </span>
            </div>
          </Link>
          <Link to="/profile">
            <img
              className="cursor-pointer w-10 sm:w-11 rounded-full aspect-square object-cover"
              loading="lazy"
              src={avatar}
              alt="profile image"
            />
          </Link>
        </article>
      </div>
    </nav>
  );
};

export default Navbar;
