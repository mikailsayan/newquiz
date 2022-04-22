import styled from "styled-components";

export default function Footer() {
    return (
        <FooterStyle>
            <UlStyle>
                <li>
                    <SVGStyle viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
                    </SVGStyle> 
                </li>
                <li>
                    <SVGStyle viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
                    </SVGStyle>
                </li>
                <li>
                    <SVGStyle viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                    </SVGStyle>
                </li>
                <li>
                    <SVGStyle viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                    </SVGStyle>
                </li>
            </UlStyle>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: black;
  bottom: 0;
  color: white;
`;

const UlStyle = styled.ul`
  display: flex;
  gap: 70px;
  list-style-type: none
`;

const SVGStyle = styled.svg`
    width: 30px;
    height: 30px;
`