import React, { useEffect,useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import CursorZoom from "react-cursor-zoom";
import ReactImageMagnify from 'react-image-magnify';
import { Ring } from "@uiball/loaders";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { addTocart } from "../redux/actions/ProductAction";

import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,wishlistProduct
} from "../redux/actions/ProductAction";

const SingleProduct = () => {
    const { product_id } = useParams();
    console.log("Product id is-->", product_id);
    let product = useSelector((state) => state.product);
    
    const cartData = useSelector((state) => state.cardItems.cartData);
    
    const products = useSelector((state) => state.allproducts.products);
    const wishlistData= useSelector((state) => state.wishlistItems.wishlistData);

    const [isInWishlist, setIsInWishlist] = useState(false);
    
    const props = {width: 400, height: 250, zoomWidth: 500, img: product[0]};

    const dispatch = useDispatch();
    console.log("Products details-->", product);
    console.log("Products detail;ojebwvhfdsi[ojp flj[ijs-->", cartData);


    const sendData = (e) => {
    // dispatch(addTocart(e));
    const product = products.find((p) => p.product_id === e.product_id);
    console.log("main addddeddd tooo ", product);

    const cartItem = cartData.find((c) => c.product_id === product.product_id);
    console.log("cartItem::::", cartItem);

    if (cartItem) {
      cartItem.product_quantity = cartItem.product_quantity + 1;

    } else {
      dispatch(addTocart(e));
      toast.success("1 Item has been added to your cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    }
  }


  const sendwishlistdata = (e) => {
    setIsInWishlist(!isInWishlist);
    // dispatch(addTocart(e));
    console.log("wishlist is her-------------------------------------------",e)

    const product = products.find(p => p.product_id === e.product_id);
    console.log('product::',product)

    const wishlistproduct = wishlistData.find(c => c.product_id === product.product_id);
    console.log('wishlistItem::::',wishlistproduct)

    if(wishlistproduct) {
      wishlistproduct.product_quantity=wishlistproduct.product_quantity+0;
      toast.info("This Item already added in your Wishlist!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });

    }
    else {
      dispatch(wishlistProduct(e));
      toast.success("1 Item added in your Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    }
  };


  console.warn(" data is", cartData);

  // Product_List FEtch API calling for particular id
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:9002/product_list?product_id=${product_id}`)
      .then((response) => {
        dispatch(selectedProduct(response.data));
        console.log("Response Data is===>", response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (product_id && product_id !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  console.log("products::::::::::::::::::::::::::::::::::::::::", product[0]);

  return (
    <>
      <div className="container main-product-wrapper py-5 home-wrapper-2">
        {Object.keys(product).length === 0 ? (
          <div className="main_spinner_style">
            <Ring size={100} lineWeight={5} speed={2} color="white" />
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-6 ">
                <div className="main-product-image">
                  
                    {/* <ReactImageZoom {...props} /> */}

                    <CursorZoom
                      image={{
                        src: `${product[0].product_image}`,
                        width: 700,
                        height: 600,
                      }}
                      zoomImage={{
                        src: `${product[0].product_image}`,
                        width: 1200,
                        height: 1000,
                      }}
                      cursorOffset={{ x: 30, y: -40 }}
                    />

{/* <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:  `${product[0].product_image}`,
    },
    largeImage: {
        src:  `${product[0].product_image}`,
        width: 400,
        height: 1000
    }
}} /> */}


                 
                </div>
              </div>

              <div className="col-6 ">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="title">
                      {/* <div>{JSON.stringify(product)}</div>   */}
                      <span className="">{product[0].product_brand}</span>
                      <span className="m-1">{product[0].product_name}</span>
                      <span className="">5G</span>
                      <span className="m-2">
                        ({product[0].ram} , {product[0].storage} ,{" "}
                        {product[0].color})
                      </span>
                    </h3>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price">₹ {product[0].product_price}&nbsp;&nbsp; <span style={{color:"#979797"}}> MRP: <strike>₹{product[0].product_mrpprice}</strike> (Inclusive of all taxes)</span> </p>
                    <div className="d-flex align-items-center gap-10">
                      
                      <p className="mb-0 t-review product-heading">( 2 Reviews ★★☆☆☆ )</p>
                    </div>
                  </div>
                  <div className=" py-3">
                    <div className=" gap-10 align-items-center my-2">
                      <h3 className="product-heading mb-2">Key Features :</h3>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Category :</h3>
                      <p className="product-data">{product[0].category_name}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Brand :</h3>
                      <p className="product-data">{product[0].product_brand}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Model Name :</h3>
                      <p className="product-data">{product[0].product_name}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">RAM :</h3>
                      <p className="product-data">{product[0].ram}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Storage :</h3>
                      <p className="product-data">{product[0].storage}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Availablity :</h3>
                      <p className="product-data">In Stock</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Color :</h3>
                      <p className="product-data">{product[0].color}</p>
                    </div>

                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          value={product[0].product_quantity}
                          
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "90px" }}
                          id=""
                        />
                      </div>

                      <div className="d-flex align-items-center gap-30 ms-5">
                        {/* <button
                          className="button border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          type="button"
                        >
                          Add to Cart
                        </button> */}
                        <button
                          className="button "
                          onClick={() => {
                            sendData(product[0]);
                          }}
                        >
                          Add to cart
                        </button>
              <ToastContainer autoClose={1300}  />

                        <button className="single_wishlist_button" style={{border:"1px solid lightgray",padding:"13.5px 25px",borderRadius:"5px"}} onClick={()=>{sendwishlistdata(product[0]);}}>
          {isInWishlist ? (
            <AiFillHeart className="fs-5 me-2 wishlist-red" style={{color:"red"}}/>
          ) : (
            <AiOutlineHeart className="fs-5 me-2 wishlist" />
          )}
          Wishlist
        </button>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-15">
      <div className="mb-3">
     
      </div>
    </div>



                   

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading mb-3 f-50">
                        Specification :
                      </h3>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Display :</h3>
                      <p className="product-data">{product[0].display}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Processor :</h3>
                      <p className="product-data">{product[0].processor}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Operating System: </h3>
                      <p className="product-data">{product[0].os}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Camera:</h3>
                      <p className="product-data">{product[0].camera}</p>
                    </div>

                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Battery & Charging :</h3>
                      <p className="product-data">{product[0].battery}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Warranty :</h3>
                      <p className="product-data">1 Year</p>
                    </div>

                    <div className="d-flex gap-10 flex-column  my-4">
                      <h3 className="product-heading">Description :</h3>
                      <p className="product-data">
                        {product[0].product_details}
                      </p>
                    </div>
                    <div className="d-flex gap-10 flex-column  my-4">
                      <h3 className="product-heading">Country of Manufacture :</h3>
                      <p className="product-data">
                      India
                      </p>
                    </div>

                    <div className="d-flex gap-10 flex-column  my-4">
                      <h3 className="product-heading">Shipping & Returns :</h3>
                      <p className="product-data">
                        Free shipping and returns available on all orders!{" "}
                        <br /> We ship all india domestic orders within
                        <b> 5-10 business days!</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h3 id="review">Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Movan Prajapti</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                      Display is good, bit battery drain fast, battery charge is very fast, camera was good for outdoor, not satisfied indoor shooting, processor speed is very good, it's have 2 speaker so stereo sound is superb..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
