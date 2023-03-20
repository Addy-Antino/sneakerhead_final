import { React, useEffect, useState } from "react";
import Payment from "../loginComponents/Payment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./server.scss";
//this is our cart ,isme render karva rhe hai cart ke andr ke component
import axios from "axios";
import Navbar from "./Navbar";
function CardPage({ setQ }) {
  const [cartData, setCartData] = useState([]);
  console.log('>>>>>>>>>>????????',cartData);
  const [totalCost, setTotalcost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // chekout component
  const [openmodal, setopenmodal] = useState(false);
  const [clearCartbutton, setclearCartbutton] = useState(false);
  console.log("cart is running");
  useEffect(() => {
    async function getCartData() {
      try {
        const response = await axios.get(
          "http://13.232.89.169:3000/api/v1/carts"
        );
        console.log("Cart returned the data: ", response.data.cart);
        setCartData(response.data.cart);
        // console.log(productData[1].description);
      } catch (error) {
        toast.error(error);
        console.log(">>>>>>>>>>> error is ", error);
      }
    }
    getCartData();
  }, [clearCartbutton]);
  useEffect(() => {
    // const total = cartData.reduce((acc, item) => acc + item.price, 0);
    const total = cartData.reduce((accumulator, item) => {
      if (item.whats_for === "Buy") {
        return accumulator + item.price;
      } else {
        return accumulator + item.price / 2;
      }
    }, 0);
    const totalQ = cartData.reduce((acc, item) => acc + 1, 0);
    setTotalcost(total);
    setTotalQuantity(totalQ);
    setQ(totalQ);
  }, [cartData]);
  //for handling when the clearcart button will be clicked
  const handleClearButton = () => {
    axios
      .delete("http://13.232.89.169:3000/api/v1/cart/all")
      .then((response) => {
        console.log("clear cart clicked", response);
        setclearCartbutton(true);
        toast.success("Cart has been cleared");
        // Handle success response here, such as updating the UI to show an empty cart
      })
      .catch((error) => {
        console.error("clear cart clicked", error);
        toast.error("Error clearing the cart");
        // Handle error response here, such as displaying an error message to the user
      });
  };

  const navBarToken = false;
  return (
    <div>
      <Navbar visibilityToken ={navBarToken}></Navbar>
      <section className="h-100 gradient-custom">
        <div className="container py-5" style={{display:"block"}}>
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <ToastContainer autoClose={1000} />
              <div className="card mb-4">
                <div className="card-header py-3">
                  <button
                    id="clearcart"
                    onClick={handleClearButton}
                    className="btn btn-primary btn-lg "
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="card-body">
                  {cartData.map((item) => {
                    // console.log(data);
                    if (item.whats_for === "Buy") {
                      return (
                        <div className="row maincontaner  shadow-custom1">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                //name of the shoes..
                                src={item.image}
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                            <p>{item.description}</p> <p>{item.whats_for}</p>
                          
                          </div>
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxwidth: "300px" }}
                            >
                              <div className="form-outline">
                                <input
                                  id="form1"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control"
                                  // onChange={() => null}
                                />
                                <label className="form-label ms-3" for="form1">
                                  Quantity
                                </label>
                              </div>
                            </div>
                            <label>
                              <i class="fas fa-rupee-sign"></i>
                            </label>
                            <strong id="itemPrice">{item.price}</strong>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="row maincontaner shadow-custom1">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                //name of the shoes..
                                src={item.image}
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                            <p>{item.description}</p> <p>{item.whats_for}</p>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxwidth: "300px" }}
                            >
                              <div className="form-outline">
                                <input
                                  id="form1"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control"
                                  // onChange={() => null}
                                />
                                <label className="form-label ms-3" for="form1">
                                  Quantity
                                </label>
                              </div>
                            </div>
                            <label>
                              <i class="fas fa-rupee-sign"></i>
                            </label>
                            <strong id="itemPrice">{item.price / 2}</strong>
                          </div>
                        </div>
                      );
                    }
                  })}
                  <hr className="my-4" />
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{totalCost}</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg "
                    onClick={() => {
                      setopenmodal(!openmodal)
                    }}
                  >
                    Go to checkout
                  </button>
                  {openmodal && (
                    <Payment
                      openmodal={openmodal}
                      setopenmodal={setopenmodal} 
                      cartData={cartData}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default CardPage;
