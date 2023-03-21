import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../homepage/Navbar";
import "./login.scss";
var user_avtar =
  "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png";
function MyOrder() {
  const [showData, setshowData] = useState([]);
  const [useremail, setUseremail] = useState("adityarup.d@antino.io");
  console.log("showdata compo ", showData);
  useEffect(() => {
    axios
      .get(
        `http://13.127.22.209:3000/api/v1/products`
      )
      .then((res) => {
        setshowData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="Profilemaincontaner">
        <div className="imgdiv">
          <img src={user_avtar} alt=" icon" />
        </div>
        <h2>Your Order Here !</h2> <h2>adityarup </h2>
        <h3>Email id : {useremail}</h3>
      </div>
      <div>
        <table id="customers">
          <tbody>
            <tr>
              <th>Product Title</th> <th>Brand</th> <th>Price</th> <th>User</th>
            </tr>
            {showData?.map((e, i) => {
              if(e.email===useremail){
                return (
                  <tr>
                    <td>{e.description}</td> <td>{e.title}</td> <td>{e.price}</td>
                    <td>{e.email}</td>
                  </tr>
                );
              } 
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MyOrder;
