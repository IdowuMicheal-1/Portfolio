'use client'
import { COLORS, QUERIES } from "@/utils/constant";
import styled from "styled-components";

export const Wrapper = styled.div`

    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    /* background-color:${COLORS.lightPurple} ;
    padding:30px 70px;
    margin-left: auto;
    margin-right: auto;
    border-radius:100px;
    font-family: var(--font-raleway);
    font-size: ${20/16}rem; */
    margin-bottom: 40px;
`

export const SubWrapper = styled.div`
display: flex;
background-color:${COLORS.lightPurple} ;
width:80%;
    padding:30px 70px;
    margin-left: auto;
    margin-right: auto;
    border-radius:100px;
    font-family: var(--font-raleway);
    font-size: ${20/16}rem;

    @media ${QUERIES.tabletAndSmaller} {
        padding:10px 20px;
    }
`

export const FooterTitle = styled.h4`
    flex: 1;
    font-size: ${26/16}rem;
    color:#6F6F6F;
    font-weight: 400;
`

export const FooterSubTwo = styled.div`
    display: flex;
    align-items: center;
    gap:20px
`

export const WrapperCopy = styled.p`
    padding-left: 208px;
    margin-top: 20px;

    @media ${QUERIES.tabletAndSmaller} {
        padding-left: 60px;
    }
`