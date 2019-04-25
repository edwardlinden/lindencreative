
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';

export const FooterPage = () => {
  return (
    <div className="sticky-footer">
      <MDBFooter color="black" className="font-small pt-4 mt-4">
     
     
        
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
         
            <MDBCol md="6 centerit">

              <p>
                <a href="tel:+46732414868" class="footer-link coolcolor">+46 73 241 48 68</a>
              </p>
              <p className="citation">
                <a href="mailto:b2b@lindencreative.se" class="footer-link coolcolor">b2b@lindencreative.se</a>

              </p>

            </MDBCol>
            <MDBCol md="6 centerit">
            <h5 className="title logo navbar-logo footer-logo">LINDEN CREATIVE</h5>
              {/* <h6 className="title">Media</h6> */}
              <a href="https://www.linkedin.com/"target="_blank"><SocialIcon target="_blank" className="margin-social" url="https://www.linkedin.com/" /></a>
              {/* <SocialIcon className="margin-social" url="https://www.youtube.com/" />
                  <SocialIcon className="margin-social" url="https://www.facebook.com/" />
                  <SocialIcon className="margin-social" url="https://www.instagram.com/" /> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        

        <div className="footer-copyright text-center py-3 small-text">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Linden Creative AB
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}


