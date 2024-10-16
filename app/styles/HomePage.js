"use client";
import styled from "styled-components";
import { COLORS, QUERIES } from "@/utils/constant";

export const Wrapper = styled.div`
  margin-top: 60px;
  /* padding-left: 120px; */
  width: 100%;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 0px;
    width: 80%;
    & > img {
      width: 100vw;
      height: fit-content;
    }
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 60%;
  }
`;

export const TopWrapper = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export const WrapperTitle = styled.p`
  font-family: var(--font-preahvihear);
  font-size: ${40 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${20 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const WrapperParagraph = styled.p`
  font-family: var(--font-preahvihear);
  font-size: ${14 / 16}rem;
  /* padding-left: 120px; */
  width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding: 15px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${12 / 16}rem;
    width: 100vw;
  }
`;

export const ExperiencedWrapper = styled.div`
  margin-top: 120px;
  font-family: var(--font-raleway);
  color: ${COLORS.gray400};
  font-size: ${16 / 16}rem;
  padding-left: 120px;
  display: flex;
  align-items: center;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const ExperiencedDiv = styled.div`
  margin-right: 60px;
  display: flex;
  /* flex-basis: 800px; */

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
  }
`;
export const ExpSpan = styled.span`
  font-size: ${80 / 16}rem;
  font-weight: bold;
  color: white;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    /* width: 100%; */
    min-width: 100vw;
    overflow-y: scroll;
    margin-top: 20px;
  }
`;

export const CardOne = styled.div`
  background-color: ${COLORS.yellow300};
  border-radius: 60px;
  width: 409px;
  height: 277px;
  padding-top: 90px;
  padding-left: 50px;

  & > p {
    font-size: ${26 / 16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
  }

  /* @media ${QUERIES.tabletAndSmaller} {
    & > img {
        width: 80%;
    }
} */
`;

export const CardTwo = styled.div`
  background-color: ${COLORS.blue300};
  border-radius: 60px;
  width: 380px;
  height: 277px;
  padding-top: 90px;
  padding-left: 50px;

  & > p {
    font-size: ${26 / 16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
  }
`;

export const CardThree = styled.div`
  background-color: ${COLORS.pink300};
  border-radius: 60px;
  width: 380px;
  height: 277px;
  padding-top: 90px;
  padding-left: 50px;

  & > p {
    font-size: ${26 / 16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
  }
`;

export const TextOne = styled.h4`
  color: ${COLORS.purple300};
  font-family: var(--font-raleway);
  font-size: ${70 / 16}rem;
`;
export const TextTwo = styled.h4`
  color: ${COLORS.purple500};
  font-family: var(--font-raleway);
  font-size: ${70 / 16}rem;
`;
export const TextFour = styled.h4`
  color: ${COLORS.purple900};
  font-family: var(--font-raleway);
  font-size: ${70 / 16}rem;
`;

export const TextWrapper = styled.div`
position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 140px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 60px;
  }
`;

export const WorkText = styled.h4`
  font-size: ${30 / 16}rem;
  color: white;
  font-family: var(--font-preahvihear);
  padding-left: 120px;
  margin-top: 60px;
  margin-bottom: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${25 / 16}rem;
    text-align: center;
    padding-left: 0px;
  }
`;

export const ExpWrapper = styled.div`
  background-color: ${COLORS.gray800};
  max-width: 80%;
  border-radius: 80px;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  padding: 84px 77px;
  display: flex;

  @media (max-width: 1100px) {
    border-radius: 40px;
    padding-top: 70px;
    padding-left: 38px;
    padding-right: 67px;
    flex-direction: column;
  }
`;

export const ExpDivOne = styled.div`
  display: flex;
  min-width: 400px;
  flex-direction: column;
`;

export const ExpDivTwo = styled.div`
color: white;
  @media (max-width: 1100px) {
    margin-top: 60px;
  }
`;

export const ExpText = styled.h4`
  font-size: ${28 / 16}rem;
  color: white;
  font-family: var(--font-raleway);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const ExpSub = styled.h4`
  font-size: ${16 / 16}rem;
  color: #6f6f6f;
  font-family: var(--font-raleway);
  font-weight: 300;
  width: 200px;
  align-items: center;

  & > span {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const ProjectTitle = styled.p`
    margin-left: 20px;
    margin-bottom: 20px;
    font-size:${34/16}rem;
    color: #CCD6F6;
    font-weight: 700;
    width:400px;

    @media ${QUERIES.tabletAndSmaller} {
        font-size:${20/16}rem;
    }
`;

export const ImageStyle = styled.div`
  display: flex;
  align-items: center;

  & > img {
    max-height: fit-content;
    /* display: block; */
  }
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
    margin-top: 60px;

    & > img {
   display: none;
  }

  }
`;

export const TextPrj = styled.div`
width: 100vw;
    margin-left:auto ;
    margin-right: auto;
    
`
export const TextPrj1 = styled.div`
display: none;
`

export const ImageTextOne = styled.p`
  background-color: ${COLORS.gray800};
  padding: 26px 34px;
  padding-right: 60px;
  border-radius: 14px;
  margin-right: -250px;
  margin-left: 20px;
  font-family: var(--font-raleway);
  text-align: left;
  width: 100vw;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 80%;
    margin-right: auto;
    margin-left:auto;
    /* width: 100vw;
    margin-right: 60px;
    margin-left: 60px;
    padding-right: 20px; */
  }
`;
export const featuredTexts = styled.h4`
  color: ${COLORS.purple100};
  font-size: ${16 / 16}rem;
`;

export const TextWpp = styled.div`
& > img {
        display: none;
    }

@media ${QUERIES.tabletAndSmaller} {
    
    & > img {
        display: revert;
    }
}
`;
export const LinkWrapper = styled.button`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border-radius: 4px;
  margin-top: 10px;
  border: none;
  background-color: ${COLORS.gray800};
  padding: 10px 10px;
  gap: 10px;

  & > a{
    align-items: center;
  }
  
  @media ${QUERIES.tabletAndSmaller} {
    margin-left: 40px;
  }
`;

export const ContactWrapper = styled.div`
  padding-left: 120px;
  max-width: 803px;
  margin-bottom: 120px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 60px;
    padding-left: 0px;
    padding-left: 20px;
    width: 100vw;
  }
`;
export const ContactHeader = styled.div`
  font-size: ${25 / 16}rem;
  color: white;
  font-family: var(--font-preahvihear);
  margin-bottom: 50px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${20 / 16}rem;
  }
`;

// export const HelloWrapper = styled.div`
// position: relative;
// pointer-events: none;




// & > img{
//   position: absolute;
  
// top:0;
// left:0;
// margin-top: 18rem;
// transition: transform 200ms;
// transform: rotate(75deg);
// }

// @media ${QUERIES.tabletAndSmaller} {
//   & > img{
//   position: absolute;
  
// top:0;
// left:0;
// margin-top: 26rem;
// transition: transform 200ms;
// transform: rotate(75deg);
// }
// }

// @media ${QUERIES.tabletAndSmaller} {
//   & > img:nth-of-type(1){
//     display: none;
// }
//   & > img:nth-of-type(2){
//     margin-top: 30rem;
// }
// }


// `

export const ContactText = styled.p`
  font-size: ${15 / 16}rem;
  color: white;
  font-family: var(--font-preahvihear);
`;
