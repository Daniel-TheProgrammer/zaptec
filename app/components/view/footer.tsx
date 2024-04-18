import { FooterBottomContainer, FooterContact, FooterCta, FooterInnerBottom, FooterInnerContainer, FooterInnerContainer2, FooterInnerView, FooterLanguageDiv, FooterMenuNav, FooterView } from "@/app/styles"



/*
Press
Investor Relations

Cookies and Privacy Policy
Documents & manuals

*/

export const Footer = () => {
    return (
      <>
        <FooterView>
          <FooterInnerView>
            <FooterInnerContainer>
              <FooterCta>
                <p>Explore our solutions</p>
              </FooterCta>
            </FooterInnerContainer>
            <FooterInnerContainer2>
              <FooterMenuNav>
                <a>Charging solutions</a>
                <a>Company</a>
                <a>Info Hub</a>
                <a>Support</a>
                <a>Partners</a>
                <a>Press</a>
                <a>Investors Relation</a>
                <a>Zaptec portal</a>
                <a>Cookies and Privacy Policy</a>
                <a>Documents & manuals</a>
              </FooterMenuNav>
              <FooterContact>
                <div>
                    <a>Contact</a>
                </div>
              </FooterContact>
            </FooterInnerContainer2>
            <FooterBottomContainer>
                <FooterInnerBottom>
                    <FooterLanguageDiv></FooterLanguageDiv>
                </FooterInnerBottom>
            </FooterBottomContainer>
          </FooterInnerView>
        </FooterView>
      </>
    );
}