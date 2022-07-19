import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const SkillBadgeContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  z-index: 1;
  margin-bottom: 25px
`

const SkillBadgeAnimation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`



export const SkillBadge = styled.img`
  height: 4.4rem;
  animation-name: ${SkillBadgeAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  border-radius: 50px;
  transition: all 0.5s ease;
  padding: 10px;
  margin-left: -10px;
  &:hover{
    transform: scale(1.2);
  }
`

export const ImageContainer = styled.div`
  text-align: center;
  background-color: black;   
  width: 80%;
  padding: 20px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Grid2Container = styled.section`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 1rem;
place-items: center;
column-gap: 4rem;
row-gap: 2rem;

`;

export const SkillText = styled.p`
  max-width: 800px;
  margin-top: 20px;
  display: flex; 
  justify-content: center;
  align-content: end;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.8);
`



export const CardContainer = styled.div`
  text-align: center;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.9);
  margin-bottom: 15px;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

