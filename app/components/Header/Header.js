import React from 'react'
import github from '../../assets/github.svg'
import Image from 'next/image'
import { Wrapper,ListWrapper } from '@/app/styles/Header'
import twitter from '../../assets/twitter.svg'


const Header = () => {
  return (
    <Wrapper>
        <ListWrapper>
            <li>Home</li>
            <li>About</li>
            <li>Lab</li>
            <Image src={github} alt="github profile link"/>
            <Image src={twitter} alt="twitter profile link"/>
        </ListWrapper>
    </Wrapper>
  )
}


export default Header