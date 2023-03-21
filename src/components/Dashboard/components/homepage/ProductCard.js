import { React, useEffect, useState } from "react";
// Importing toastify module
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import "./server.scss";
import Navbar from "./Navbar";
console.log(useSelector);
// var dummyimage ="https://www.jiomart.com/images/product/600x750/rvrgzpx6xy/robbie-jones-white-sneakers-for-men-product-images-rvrgzpx6xy-0-202209031733.jpg";
function ProductCard({ productData, setProductData, q }) {
  // for searching
  const [searchKeyword, setSearchKeyword] = useState("");
  //for filtering out based on locationo..
  const [location, setLocation] = useState("");
  //current page where we are (by default 1)
  const [currentPage, setCurrentPage] = useState(1);
  //total pages available (given by server.)
  const [totalNoPages, setTotalPages] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  // const [sortByPrice,setSortByPrice]=useState([]);
  //whenever current page value will change it will fetch data from server using fetchdata()
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  //fx for fetching data from user, on the basis of page number
  const fetchData = async (pageNumber) => {
    if (currentPage === 1) {
      //for fetching data for page-1
      console.log("we afre on page 1 and no other filter");
      try {
        const response = await axios.get(
          `http://13.232.89.169:3000/api/v1/products/pages`
        );
        setDataLoaded(true);
        // setProductData(response.data.products);
        //fetching total pages from the database and setting state value via it...
        setTotalPages(response.data.totalNoPages);
        console.log("total number of pages", totalNoPages);
      } catch (error) {
        console.error(error);
      }
      //for fetching data based on pagination (page number)
      try {
        const response = await axios.get(
          `http://13.232.89.169:3000/api/v1/products?page=${pageNumber}`
        );
        setProductData(response.data.products);
        //fetching total pages from the database and setting state value via it...
        // setTotalPages(response.data.totalPages);
        console.log("total number of pages");
      } catch (error) {
        console.error(error);
      }
    } else if (currentPage !== 1 && searchKeyword === "" && location === "") {
      setSearchKeyword("");
      setLocation("");
      console.log(
        `we are on page ${currentPage} and no location and no search keyword.`
      );
      //for fetching data for page-1
      try {
        const response = await axios.get(
          `http://13.127.22.209:3000/api/v1/products/pages`
        );
        // setProductData(response.data.products);
        //fetching total pages from the database and setting state value via it...
        setTotalPages(response.data.totalNoPages);
        console.log("total number of pages", totalNoPages);
      } catch (error) {
        console.error(error);
      }
      //for fetching data based on pagination (page number)
      try {
        const response = await axios.get(
          `http://13.127.22.209:3000/api/v1/products?page=${pageNumber}`
        );
        setProductData(response.data.products);
        //fetching total pages from the database and setting state value via it...
        // setTotalPages(response.data.totalPages);
        console.log("total number of pages");
      } catch (error) {
        console.error(error);
      }
    }
    // else if(currentPage!==1 && searchKeyword==="" && location!=="")
    // {
    //   console.log(`we are on page ${currentPage} and location ${location} and no search keyword.`)
    //   try {
    //     const response = await axios.get(
    //       `http://13.127.22.209:3000/api/v1/products/pages`
    //     );
    //     // setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     setTotalPages(response.data.totalNoPages);
    //     console.log("total number of pages", totalNoPages);
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   //for fetching data based on pagination (page number)
    //   try {
    //     const response = await axios.get(
    //       `http://13.232.89.169:3000/api/v1/products?page=${pageNumber}/${location}`
    //     );
    //     setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     // setTotalPages(response.data.totalPages);
    //     console.log("total number of pages");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // else if(currentPage!==1 && searchKeyword!=="" && location==="")
    // {
    //   console.log(`we are on page ${currentPage} and no location and search ${searchKeyword}.`)
    //   try {
    //     const response = await axios.get(
    //       `http://13.232.89.169:3000/api/v1/products/pages`
    //     );
    //     // setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     setTotalPages(response.data.totalNoPages);
    //     console.log("total number of pages", totalNoPages);
    //   } catch (error) {
    //     console.error(error);
    //   }
    //for fetching data based on pagination (page number)
    //   try {
    //     const response = await axios.get(
    //       `http://13.232.89.169:3000/api/v1/products?page=${pageNumber}/${searchKeyword}`
    //     );
    //     setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     // setTotalPages(response.data.totalPages);
    //     console.log("total number of pages");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // else if(currentPage!==1 && searchKeyword!=="" && location!=="")
    // {
    //   console.log(`we are on page ${currentPage} and location ${location} and search ${searchKeyword}.`)
    //   try {
    //     const response = await axios.get(
    //       `http://13.232.89.169:3000/api/v1/products/pages`
    //     );
    //     // setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     setTotalPages(response.data.totalNoPages);
    //     console.log("total number of pages", totalNoPages);
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   //for fetching data based on pagination (page number)
    //   try {
    //     const response = await axios.get(
    //       `http://13.232.89.169:3000/api/v1/products?page=${pageNumber}/${searchKeyword}/${location}`
    //     );
    //     setProductData(response.data.products);
    //     //fetching total pages from the database and setting state value via it...
    //     // setTotalPages(response.data.totalPages);
    //     console.log("total number of pages");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  };
  //handling click on the page number and then setting value of current page..
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //if total number of pages rendered are =0 then we wont be showing our pagination thing....
  const RenderPagination = () => {
    if (totalNoPages === 0 || location !== "" || searchKeyword !== "") {
      return null;
    }
    //this is empty array which will be having all the pagination values..
    const pages = [];
    //based on the total pages from the backend we will be rendering pagination numbers..
    for (let i = 1; i <= totalNoPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          <a style={{ cursor: "pointer" }} className="page-link">
            {i}
          </a>
        </li>
      );
    }
    return (
      <div>
        <div className="pagiNation">
          <nav aria-label="Page navigation example">
            <ul
              style={{ marginTop: "2rem" }}
              className=" pagination justify-content-center"
            >
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  {currentPage === 1 ? (
                    ""
                  ) : (
                    <a
                      style={{ cursor: "pointer" }}
                      className="page-link"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  )}
                </li>
                {pages}
                <li
                  className={`page-item ${
                    currentPage === totalNoPages ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {currentPage === totalNoPages ? (
                    ""
                  ) : (
                    <a
                      style={{ cursor: "pointer" }}
                      className="page-link"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  )}
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
  //for handling the search request....
  useEffect(() => {
    //if there is no search and also there is no location.
    if (searchKeyword === "" && location === "") {
      console.log("there is no search term and no location !!");
      async function getUserData() {
        try {
          const response = await axios.get(
            "http://13.232.89.169:3000/api/v1/products"
          );
          console.log("checking api ", response);
          console.log("modify api cheking", response.data);
          setProductData(response.data.products);
          console.log("productData:", productData);
          // console.log(productData[1].description);
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      }
      getUserData();
    }
    //when only search keyword and no location..
    else if (searchKeyword !== "" && location === "") {
      console.log("Hurray !! we have a search term but no location");
      //but of there is some content in research then show everything according to searched content.
      async function filterData() {
        try {
          const response = await axios.get(
            `http://13.232.89.169:3000/api/v1/products?keyword=${searchKeyword}`
          );
          console.log("filter data api checking", response.data);
          setProductData(response.data.products);
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      }
      filterData();
    }
    //when we have search term and also location
    else if (searchKeyword !== "" && location !== "") {
      console.log("Hurray!! we have a search term and location.");
      //but of there is some content in research then show everything according to searched content.
      async function filterData() {
        try {
          const response = await axios.get(
            `http://13.127.22.209:3000/api/v1/products?keyword=${searchKeyword}&location=${location}`
          );
          console.log("location and search ka data", response.data.products);
          setProductData(response.data.products);
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      }
      filterData();
    } else if (searchKeyword === "" && location !== "") {
      console.log("Hurray!! we dont  have a search term but a location.");
      //but of there is some content in research then show everything according to searched content.
      async function filterData() {
        try {
          const response = await axios.get(
            `http://13.127.22.209:3000/api/v1/products?location=${location}`
          );
          console.log(" sirf location ka data", response);
          setProductData(response.data.products);
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      }
      filterData();
    }
  }, [searchKeyword, location]);
  const handlePriceChange = async (value) => {
    await axios
      .get(`http://13.232.89.169:3000/api/v1/products?price=${value}`)
      .then((res) => {
        setProductData(res.data.products);
      });
  };
  // console.log(">>>>>>>>>>>>>>>??????????",sortByPrice);

  const handleLocationChange = (event) => {
    console.log("dropdown working for locaqtion");
    setLocation(event.target.value);
    console.log(location);
  };

  function handleProductButtonClick(item, event) {
    console.log("product clicked is", item);
    console.log("event is ", event.price);
    const data = {
      product_id: item._id,
      name: item.title,
      price: item.price,
      quantity: item.quantity,
      email: item.email,
      description: item.description,
      whats_for: event,
      image: item.image.url,
    };
    axios
      .post("http://13.127.22.209:3000/api/v1/cart", data)
      .then((response) => {
        console.log("response aya", response.data);
        // Handle successful response from server
        toast.success("Product Added to Cart");
      })
      .catch((error) => {
        toast.error(error);
        console.error("error aayi", error);
        // Handle error from server
      });
  }
  const navBarToken = true;
  return (
    <>
      <Navbar
        visibilityToken={navBarToken}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        q={q}
      />
      {/* &nbsp; */}
      <ImageSlider />
      <div className="selectedLocation">
        <i class="fas fa-map-marker-alt fa-2x"></i>
        <label htmlFor="Location"></label>
        <select
          // id="location-select"
          // value={location}
          onChange={handleLocationChange}
          value={location}
        >
          <option value="">No Location</option>
          <option value="gurgaon">Gurgaon</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>
      <div className="sortByPrice">
        <h5>Sort By Price</h5>
        <div>
          <label>High to low</label>
          <input
            onChange={() => handlePriceChange(-1)}
            class="form-check-input"
            type="radio"
            name="radioNoLabel"
            id="radioNoLabel1"
            value=""
            aria-label="..."
          />
        </div>
        <div>
          <label>Low to high</label>
          <input
            onChange={() => handlePriceChange(1)}
            class="form-check-input"
            type="radio"
            name="radioNoLabel"
            id="radioNoLabel2"
            value=""
            aria-label="..."
          />
        </div>
      </div>
      <MDBContainer>
        <MDBRow className="mb-3 productCard container d-flex justify-content-center">
          <ToastContainer autoClose={1000} />
          {productData.length !== 0 ? (
            productData.map((item) => {
              return (
                <MDBCol
                  className=" maincontaner  shadow-custom"
                  key={item._id}
                  size={3}
                >
                  <div></div>
                  <MDBCard
                    className="col-md-auto"
                    style={{ boxShadow: "none" }}
                  >
                    <div class="hover-zoom">
                      <MDBCardImage
                        className="productImage"
                        src={item.image.url}
                        position="top"
                        alt="..."
                      />
                    </div>
                    <MDBCardBody className="cardBody rounded">
                      <MDBCardTitle className="title-font">
                        {item.title}
                      </MDBCardTitle>
                      <h4 id="descriptionElement">{item.description}</h4>
                      <MDBCardText> {item.price} </MDBCardText>
                      <MDBBtn
                        className="btn-buy btn"
                        style={{ float: "left" }}
                        onClick={(event) =>
                          handleProductButtonClick(item, "Buy")
                        }
                      >
                        Buy
                      </MDBBtn>
                      <MDBBtn
                        className="btn-danger btn"
                        style={{ float: "right" }}
                        onClick={(event) =>
                          handleProductButtonClick(item, "Rent")
                        }
                      >
                        Rent
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })
          ) : dataLoaded ? (
            <p>...Loading</p>
          ) : (
            <p>No Shoes To show for the following filter.</p>
          )}
        </MDBRow>
      </MDBContainer>
      {productData.length === 0 ? "" : <RenderPagination />}
      <Footer />
    </>
  );
}
export default ProductCard;
