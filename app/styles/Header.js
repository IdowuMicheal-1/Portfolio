'use client'
import styled from 'styled-components'
import { COLORS, QUERIES } from '@/utils/constant'


export const Wrapper = styled.div`
    width: 622px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${COLORS.lightPurple} ;
    padding:23px 12px;
    margin-left: auto;
    margin-right: auto;
    border-radius:100px;
    font-family: var(--font-raleway);
    font-size: ${20/16}rem;
    color: white;
/* 
    @media ${QUERIES.tabletAndSmaller} {
        display: hidden;
    } */
`

export const ListWrapper = styled.ul`
    display: flex;
    gap:42px;
    align-items: center;

    & > li{
        list-style: none;
    }
`
