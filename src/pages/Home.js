import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard"
import Slider from "react-slick";
import SpecialProduct from '../components/SpecialProduct';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DocumentTitle from 'react-document-title';
import { useEffect } from 'react';
import HomeProduct from '../components/HomeProduct';


function Home() {
  const products = useSelector((state) => state.allproducts.products);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    document.title = 'Ebuddy online site for electronic';
  }, []);
  const lazyloading = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    
    <div>
        <div className='container home-wrapper-1 section_space'>
        <div className="row">
  <div className="col-md-6 col-sm-12">
    <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
      <div className="small-banner position-relative">
        <Link>
          <img
            src="images/catbanner-01.jpg"
            className="img-fluid rounded-3"
            alt="main banner"
          />
        </Link>
        <div className="small-banner-content position-absolute">
          <Link>
            <h4>Best Sake</h4>
            <h5>iPad S13+ Pro.</h5>
            <p>From ₹999.00 <br /> or ₹41.62/mo.</p>
          </Link>
        </div>
      </div>

      <div className="small-banner position-relative">
        <Link>
          <img
            src="images/catbanner-03.jpg"
            className="img-fluid rounded-3"
            alt="main banner"
          />
        </Link>
        <div className="small-banner-content position-absolute">
          <Link>
            <h4>NEW ARRIVAL</h4>
            <h5>But iPad Air</h5>
            <p>From ₹999.00 <br /> or ₹41.62/mo.</p>
          </Link>
        </div>
      </div>
      <div className="small-banner position-relative">
        <Link>
          <img
            src="images/catbanner-04.jpg"
            className="img-fluid rounded-3"
            alt="main banner"
          />
        </Link>
        <div className="small-banner-content position-absolute">
          <Link>
            <h4>NEW ARRIVAL</h4>
            <h5>But iPad Air</h5>
            <p>From ₹999.00 <br /> or ₹41.62/mo.</p>
          </Link>
        </div>
      </div>
      <div className="small-banner position-relative">
        <Link>
          <img
            src="images/home/mobile3.png"
            className="img-fluid rounded-3"
            alt="main banner"
          />
        </Link>
        <div className="small-banner-content position-absolute">
          <Link>
            <h4>NEW ARRIVAL</h4>
            <h5>But iPad Air</h5>
            <p>From ₹999.00 <br /> or ₹41.62/mo.</p>
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-sm-12">
    <div className="main-banner position-relative">
      <img
        src="images/banner_07.jpg"
        className="img-fluid rounded-3"
        alt="main banner"
        style={{ height: "190%" }}
      />
      <div className="main-banner-content position-absolute">
        <h4>SUPERCHARGED FOR PROS.</h4>
        <h5>iPad S13+ Pro.</h5>
        <p>From ₹999.00 or ₹41.62/mo.</p>
        <Link to="/contactus" className="button">
          BUY NOW
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* End Row */}


        </div>{/* End image Conatiner */}
    

    {/* categories items style */}
    <div className='container'>


    <section className='two_image_title_style section_space'>
        <div className='row '>

            <div className='col d-flex fsp_style'>
              <img src='images/service.png' alt="service_image"/>
              <h3>Free Delivery</h3>

            </div> <div className='col d-flex fsp_style'>
              <img src='images/service-06.png' alt="service_image"/>
              <h3>Feeback</h3>
            </div>
            <div className='col d-flex fsp_style'>
              <img src='images/service-03.png' alt="service_image"/>
              <h3>Support 24/7</h3>
            
              {/* <p>From all order ober 1000</p> */}
            </div>
            <div className='col d-flex fsp_style'>
              <img src='images/service-05.png'alt="service_image"/>
              <h3>Secure Payment</h3>
            </div>
        </div>
    </section>
    


      <section className='section_space categ_box-style'>
            <div className='row'>

                <div className='col-3 d-flex align-items-center gap '>
                  <div className=''>
                    <Link>
                    <h5>Laptop</h5>
                    <p>5 items</p>
                    </Link>
                  </div>
                  <img src="images/laptop.jpg" className="img-fluid " alt="camera" style={{width:"45%"}}/>
                  
                </div>
                
                <div className='col-3 d-flex align-items-center gap border_style'> 
                <div className=''>
                <Link>
                    <h5>Tablet</h5>
                    <p>5 items</p>
                    </Link>
                  </div>
                  <img src="images/tab3.jpg" alt="camera"/>
                  </div>
                <div className='col-3 d-flex align-items-center gap border_style'> <div className=''>
                <Link>
                    <h5>Computer</h5>
                    <p>5 items</p>
                    </Link>
                  </div>
                  <img src="images/computer.webp" alt="camera" style={{width:"51%",paddingRight:"15%"}}/></div>
                <div className='col-3 d-flex align-items-center gap border_style'> <div className=''>
                <Link>
                    <h5>Mobile</h5>
                    <p>5 items</p>
                </Link>
                  </div>
                  <img src="images/mobile1.webp" alt="camera" style={{width:"45%"}}/></div>
            </div>

            </section>{/* 2nd item */}
            <section className='section_space'>
            <div>
        <Slider {...lazyloading}>

          <Link>
          <div className='lazy-loading'>
            <img src="images/banner-03.png" alt="main_banner"/>
          </div>
          </Link>

          <Link>
          <div className='lazy-loading'>
            <img src="images/banner_05.png" alt="main_banner"/>
          </div>
          </Link>
          
          <Link>
          <div className='lazy-loading'>
            <img src="images/banner_01.png" alt="main_banner"/>
          </div>
          </Link>
          
          <Link>
          <div className='lazy-loading'>
            <img src="images/banner_02.png" alt="main_banner"/>
          </div>
          </Link>
        </Slider>
      </div>
      </section>
      {/* End */}


      <section className='section_space mb-5'>
          <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Featured Collection</h3>
                </div>
          </div>    
          
        <div className="row">
        <div>
        
        <Slider {...settings}>
          <div>
           
            <HomeProduct/> 
           
          </div>
          <div>
          <HomeProduct/> 
          </div>
          <div>
          <HomeProduct/> 
        
          </div>
          <div>
          <HomeProduct/> 
          
          </div>
          <div>
          <HomeProduct/> 
            
          </div>
          <div>
          <HomeProduct/> 
            
          </div>
          <div>
          <HomeProduct/> 
            
          </div>
          <div>
          <HomeProduct/> 
          
          </div>
        </Slider>
      </div>
        {/* <ProductCard /> */}
     
              {/* <Slider  {...settings}>
              {products.map((product % 4==0)=>{
               console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",product)
               return <ProductCard key={product.product_id} actualData={product}/>
    
    })} */}
        
              {/* </Slider> */}
          </div>
        </section>






          {/* End Produc */}
          
        {/* End Feautered collection */}

        {/* list 4 product */}

      <section className='section_space'>
              
        <div className="famous-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <Link to="/ourstore">
              <img
                src="images/ipad_pro.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Supercharged by M2</h6>
                <p>From ₹819or ₹16.62/mo. for 24 mo.*</p>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <Link to="/ourstore">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <Link to="/ourstore">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From ₹999.00 or ₹41.62/mo. for 24 mo. Footnote*
                </p>
              </div>

              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <Link to="/ourstore">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From ₹699 or ₹116.58/mo. for 12 mo.*
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>{/* Row end */}
      </div>
      
            </section>{/* end 4 product list  */}

{/* Special product show */}
            <section className='section_space'>

            <div className="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          
        </div>
      </div>
            </section>

{/* End Special product*/}
            

            <section className='section_space'></section>

    </div>{/*End main container */}
    </div>// Main 
    
  )
}

export default Home