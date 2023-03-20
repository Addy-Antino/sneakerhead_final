import { React, useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import user from "./img/user.png";
import sell from "./img/sell.png";
import myorder from "./img/myorder.png";
import help from "./img/question.png";
import logout from "./img/log-out.png";
import logo from "./img/logo.png";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./server.scss";

import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "../../features/cardSlice";
var loginAvtar =
  "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png";

function Navbar({ q, setSearchKeyword, visibilityToken }) {
  // const [searchKeyword,setSearchKeyword] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const { card, totalQuentity } = useSelector((state) => state.allcard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardTotal());
  }, [card]);

  // menu bar user
  let menuRef = useRef();
  useEffect(() => {
    let heander = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", heander);
  });

  //for handling search content..
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <MDBNavbar light bgColor="light" className="sticky-top navBar">
        <MDBContainer fluid className="maincontaner">
          <span>
            <Link to="/dashboard">
              <img src={logo} alt="icon" style={{ width: "11rem" }} />
            </Link>{" "}
          </span>

          <div>
            {visibilityToken ? (
              <TextField
                id="standard-basic"
                onChange={handleSearch}
                value={searchTerm}
                label="Search"
                variant="standard"
              />
            ) : (
              ""
            )}
          </div>

          {/* <TextField id="standard-basic" onChange={handleSearch} value={searchTerm} label="Search" variant="standard" /> */}
          <MDBBtn color="light" className="cartContaner">
            <Link to="/card">
              <i class="fas fa-shopping-cart "></i>
              <span style={{ color: "black" }}>{q}</span>{" "}
            </Link>
          </MDBBtn>

          <i
            style={{ fontSize: "1.3rem" }}
            className="fas fa-user-alt fa-4x hover-overlay hover-zoom hover-shadow ripple"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          ></i>
          {openMenu && (
            <div className="userContaner shadow-custom  logindiv" ref={menuRef}>
              <h3>
                <img style={{ height: "6rem" }} src={loginAvtar} alt="" />
                <br />
                <span>User</span>
              </h3>
              <ul>
                {" "}
                <Link to="/Profile">
                  {" "}
                  <DropdownItem img={user} text={"My Profile"} />{" "}
                </Link>{" "}
                <hr />{" "}
                <Link to="/MyOrder">
                  {" "}
                  <DropdownItem img={myorder} text={"MyOrder"} />{" "}
                </Link>{" "}
                <hr />{" "}
                <Link to="/Sell">
                  {" "}
                  <DropdownItem img={sell} text={"Sell"} />{" "}
                </Link>{" "}
                <hr />{" "}
                <Link to="/Help">
                  {" "}
                  <DropdownItem img={help} text={"Helps"} />{" "}
                </Link>{" "}
                <hr />{" "}
                <Link to="/">
                  {" "}
                  <DropdownItem img={logout} text={"Logout"} />{" "}
                </Link>{" "}
              </ul>
            </div>
          )}
        </MDBContainer>
      </MDBNavbar>
    </>
  );

  function DropdownItem(props) {
    return (
      <li className="dropdownItem">
        <img src={props.img} alt="img" />
        <a> {props.text} </a>
      </li>
    );
  }

  function DropdownItem(props) {
    return (
      <li className="dropdownItem">
        <img src={props.img} alt="img" />
        <a> {props.text} </a>
      </li>
    );
  }
}
export default Navbar;
