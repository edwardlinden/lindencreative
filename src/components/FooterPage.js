
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';

export const FooterPage = () => {
  return (
    <div className="sticky-footer">
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title logo navbar-logo">LINDEN CREATIVE</h5>
              <p>
                Follow us and our journey, that we create togheter - with you - on our media channels.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h6 className="title">Media</h6>
                  <SocialIcon className="margin-social" url="https://www.youtube.com/" />
                  <SocialIcon className="margin-social" url="https://www.linkedin.com/" />
                  <SocialIcon className="margin-social" url="https://www.facebook.com/" />
                  <SocialIcon className="margin-social" url="https://www.instagram.com/" />
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


