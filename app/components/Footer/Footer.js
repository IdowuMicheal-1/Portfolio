import React from 'react'
import github from '../../assets/github.svg'
import Image from 'next/image'
import { Wrapper,SubWrapper,FooterTitle,FooterSubTwo,WrapperCopy} from '@/app/styles/Footer'
import twitter from '../../assets/twitter.svg'


const Footer = () => {
  return (
    <Wrapper>
        <SubWrapper>
            <FooterTitle>Follow me</FooterTitle>
            <FooterSubTwo>
            <Image src={github} alt="github profile link"/>
            <Image src={twitter} alt="twitter profile link"/>
            </FooterSubTwo>
        </SubWrapper>
        <WrapperCopy>IdowuMicheal © 2024</WrapperCopy>
    </Wrapper>
  )
}


export default Footer