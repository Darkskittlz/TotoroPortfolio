import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import styled from 'styled-components';


export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`


export const FooterWrapper = styled.section`
  display: flex;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  z-index: 1;
  width: 100%;
  justify-items: center;
`


export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	z-index: 1;

	&:hover {
		color: #fff;
		left: 6px;
	}
`

export const SocialIconsContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-items: center;
margin-left: 20%;
z-index: 1;

@media only screen and (max-width: 900px) {
	margin-left: 0%;
}
`

export const CompanyContainer = styled.div`
  	display: flex;
	flex-wrap: wrap;
	margin-left: 38px;
	z-index: 1;
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	z-index: 1;
`

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	z-index: 1;
`


export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
	z-index: 1;
	padding: 40px 0 28px;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
	z-index: 1;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

`

export const Icon = styled.img`
	height: 7vh;
`


function Footer() {
  return (
      <FooterWrapper>
        <SocialIconsContainer>
            <CompanyContainer>
            <Slogan>Eat Sleep Code Repeat</Slogan>
            </CompanyContainer>
            <SocialContainer>
            <SocialIcons href="https://discord.gg/kNhV2WPCUP">
                <Icon img src="/images/discord.png" />
            </SocialIcons>
            <SocialIcons href="https://github.com/Darkskittlz">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/Jeremydev">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/skittles_dark">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
  );
};




export default Footer;
