'use client'
import styled from "styled-components";
import { COLORS } from "@/utils/constant";

export const Wrapper = styled.div`
margin-top: 30px;
padding-left: 120px;
`

export const WrapperTitle = styled.p`
font-family: var(--font-preahvihear);
font-size: ${40/16}rem;
padding-left: 120px;
`

export const WrapperParagraph = styled.p`
font-family: var(--font-preahvihear);
font-size: ${14/16}rem;
padding-left: 120px;
width: 600px;
`

export const ExperiencedWrapper = styled.div`
    margin-top: 120px;
    font-family: var(--font-raleway);
    color: ${COLORS.gray400};
    font-size: ${16/16}rem;
    padding-left: 120px;
    display: flex;
    align-items: center;
    width: 100%;

`

export const ExperiencedDiv = styled.div`
margin-right: 60px;
display: flex;
/* flex-basis: 800px; */
`
export const ExpSpan = styled.span`
    font-size: ${80/16}rem;
    font-weight: bold;
    color:white
`

export const CardWrapper = styled.div`
display: flex;
gap:40px;
flex: 1;
/* overflow-y: auto; */

/* display: flex;
flex: 1; */
`

export const CardOne = styled.div`
background-color: ${COLORS.yellow300};
border-radius: 60px;
width: 409px;
height: 277px;
padding-top: 90px;
padding-left: 50px;

& > p {
    font-size: ${26/16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
}
`

export const CardTwo = styled.div`
background-color: ${COLORS.blue300};
border-radius: 60px;
width: 380px;
height: 277px;
padding-top: 90px;
padding-left: 50px;

& > p {
    font-size: ${26/16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
}
`

export const CardThree = styled.div`
background-color: ${COLORS.pink300};
border-radius: 60px;
width: 380px;
height: 277px;
padding-top: 90px;
padding-left: 50px;

& > p {
    font-size: ${26/16}rem;
    font-family: var(--font-raleway);
    color: ${COLORS.gray700};
    font-weight: bold;
}
`

export const TextOne = styled.h4`
color:${COLORS.purple300};
font-family: var(--font-raleway);
font-size: ${70/16}rem;
`
export const TextTwo = styled.h4`
color:${COLORS.purple500};
font-family: var(--font-raleway);
font-size: ${70/16}rem;
`
export const TextFour = styled.h4`
color:${COLORS.purple900};
font-family: var(--font-raleway);
font-size: ${70/16}rem;
`

export const TextWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top:140px
`

export const WorkText = styled.h4`
    font-size: ${30/16}rem;
    color: white;
    font-family: var(--font-preahvihear);
    padding-left: 120px;
    margin-top: 60px;
    margin-bottom: 30px;
`

export const ExpWrapper = styled.div`
    background-color: ${COLORS.gray800};
    max-width: 80%;
    border-radius: 80px;
    margin-left: auto;
    margin-right: auto;
    height: fit-content;
    padding: 84px 77px;
    display: flex;
`

export const ExpDivOne = styled.div`
display: flex;
   min-width: 400px;
    flex-direction: column;
`

export const ExpText = styled.h4`
    font-size: ${28/16}rem;
    color: white;
    font-family: var(--font-raleway);
`

export const ExpSub = styled.h4`
    font-size: ${16/16}rem;
    color:#6F6F6F;
    font-family: var(--font-raleway);
    font-weight: 300;
    width: 200px;
    align-items: center;

    & > span {
        margin-left: 12px;
        margin-right: 12px;
    }
`

export const ImageStyle = styled.div`
display: flex;
align-items:center
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
`
export const featuredTexts = styled.h4`
    color:${COLORS.purple100};
    font-size: ${16/16}rem;
`

export const TextWpp = styled.div`
`
export const LinkWrapper = styled.button`
display: flex;
align-items: center;
margin-left: 20px;
border-radius: 4px;
margin-top: 10px;
border: none;
background-color: ${COLORS.gray800};
padding: 10px 10px;
gap:10px;
z-index: -1;
`

export const ContactWrapper = styled.div`
padding-left: 120px;
max-width: 803px;
margin-bottom: 120px;
`
export const ContactHeader = styled.div`
    font-size: ${25/16}rem;
    color:white;
    font-family: var(--font-preahvihear);
    margin-bottom: 50px;
`

export const ContactText = styled.p`
    font-size: ${15/16}rem;
    color: white;
    font-family: var(--font-preahvihear);
   
`