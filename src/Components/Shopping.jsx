import React from "react";
import "./Shopping.css";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";



let image1 = "https://cdn.shopify.com/s/files/1/1495/8760/products/gI72_rnw_5290a0ce-de34-49cf-a86f-3a8a7591c17c_1024x.jpg?v=1619712047"
let image2 = "https://www.byrdie.com/thmb/DZ0lL1BZmbXDNGtsvd-4d4QZ-N0=/2430x2892/filters:fill(auto,1)/GettyImages-175545527-6de413e1fcc3454fa0563e87c4c83385.jpeg"
let image3 = "https://cdn.shopify.com/s/files/1/0572/3645/5609/products/Bionic-glow-reality-cap-off_1500x.jpg?v=1663078028"



function Shopping() {

  const [selectedImage ,setSelectedImage] = useState(0)
  const [allImage ,setAllImage] = useState([image1 , image2 , image3])

  return (
    <>
      <div className="product-page">
        <div className="product-Container">
          <div className="product-contnet">
            <div className="productImage column">
              <div className="product-image-main ">
                
                  <div>
                      <img
                        className="image-container" id="imageChange"
                        src={allImage[selectedImage]}
                      />
                  </div>
                  <div className="Real-icon SizeofIcon">
                      <span className="search">
                        <FiSearch />
                      </span>

                      <span className="icon SizeofIcon"
                      onClick={()=>{
                        if(selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                      }}>
                        <FiArrowLeft  />
                      </span>

                      <span className="icon SizeofIcon"
                      onClick={()=>{
                        if(selectedImage < allImage.length -1)
                        setSelectedImage(selectedImage + 1)
                      }}
                      >
                        <FiArrowRight />
                      </span>
                  </div>
                  

                </div>
            </div>
            <div className="productInfo column">
              {/* info */}
              <div className="product-info-brand">
                <h6>THE BEAUTY CROP</h6>
              </div>
              <div className="product-info-title">
                <h3 className="product-info-name">
                  GLOW MILK LIQUID HIGHLIGHTER
                </h3>
              </div>
              <div className="price-measurment">
                <p className="product-info-measurment">30ml</p>
              </div>
              <div className="product-info_price-info">
                <div className="product-info_price-container">
                  <span className="product-info_price-major">₹877.00</span>
                </div>
              </div>
              <div>
                <span className="product-info__price--original-amount">
                  ₹1,254.00
                </span>
                <span className="product-info__price--percentage-saving">
                  30% off
                </span>
              </div>
              <div className="product-info__delivery-message selectName">
                <h3>Various delivery option available.</h3>
                <BsInfoCircle className="i-icon" />
              </div>
              <div className="product-variant-selectors">
                <select
                  className="form-select selectWidth"
                  aria-label="Default select example"
                >
                  <option selected>Please choose any option</option>
                  <option value="1">Blind Date</option>
                  <option value="2">Just Dew it</option>
                  <option value="3">Peachin'</option>
                  <option value="3">Pear Pressure</option>
                </select>
                <ul className="product-swatages">
                  {/* <li>type 1</li>
                  <li>type 2</li> */}
                </ul>
              </div>
              <div className="product-info-button">
                <div className="button-container">
                  <button className="button1" type="button">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <AiOutlineHeart className="HearIcon" />
                </div>
              </div>
              {/* Accordion */}
              <div className="Accodiono-container" id="hello"> 
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Despriction
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        A shimmery liquid blush. It’s time to meet your new
                        favourite base product, The Beauty Crop’s Glow Milk
                        Liquid Blusher. The unique buildable and blendable
                        formula is enriched with skin nourishing ingredients,
                        that effortlessly melt into skin for a lasting, soft
                        focus, flushed glow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Ingdrient
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        Caprylic/Capric Triglyceride, Hydrogenated
                        Styrene/Isoprene Copolymer, Polyisobutene, Tocopheryl
                        Acetate, Prunus Amygdalus Dulcis (Sweet Almond) Seed
                        Extract, Phenoxyethanol, [+/- (May Contain) (Peut
                        Contenir), Mica, Red Iron Oxide (Ci 77491), Yellow Iron
                        Oxide (Ci 77492), Red 6 Lake (Ci 15850), Titanium
                        Dioxide (Ci 77891)
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Directions
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        Blend blush into skin with desired method of application
                        such as fingers, blush, or sponge. Add more to intensify
                        and build colour. Can be applied seamlessly over or
                        under makeup.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingfour">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapsefour"
                      >
                        Returns and Delivery
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapsefour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingfour"
                    >
                      <div className="accordion-body">
                        <strong>
                            Returns                   
                        </strong>{" "}
                        Return items to us by post within 60 days of receipt.
                        Items should be unused, unopened and have any original seals intact. 
                        Please read our returns help section for more information.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Shopping;
