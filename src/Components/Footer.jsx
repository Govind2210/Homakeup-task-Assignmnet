import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='site-footer-wraper'>
       <div className='site-footer'>
            <div className='site-footer-main'>
                <div className='site-footer-logo'>
                    <img className='beauty-logo' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kbf0crze6fmoungu8apw'/>
                </div>
                <div className='beauty-bay-info'>
                    <div className='site-footer-main-info'>
                        <ul className='site-footer-main-info-helps-legal'>
                            <h4>HELP, INFOEMATION & LEGALS</h4>
                            <li>Delivery & Returns</li>
                            <li>FAQ's</li>
                            <li>Haul Pass</li>
                            <li>Gits Cards</li>
                            <li>About Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-info'>
                <p>
                Copyright © 2022 BEAUTY BAY Ltd.<br></br>
                Registered office address Level 12, 5 Exchange Quay,
                 M5 3EF. Registered in England, company registration number 6427672.
                </p>
            </div>
       </div>
    </div>
  )
}

export default Footer