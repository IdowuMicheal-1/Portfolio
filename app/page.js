import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import hero from "./assets/hero.svg";
import {
  Wrapper,
  WrapperTitle,
  WrapperParagraph,
  ExperiencedWrapper,
  ExperiencedDiv,
  ExpSpan,
  CardWrapper,
  CardOne,
  CardTwo,
  CardThree,
  ContactText,
  TextPrj,
  TextPrj1
} from "./styles/HomePage";
import {
  TextOne,
  TextTwo,
  TextFour,
  TextWrapper,
  WorkText,
  ExpWrapper,
  ExpText,
  ExpSub,
  ExpDivOne,
  ImageStyle,
  ImageTextOne,
  TextWpp,
  LinkWrapper,
  ContactWrapper,
  ContactHeader,
  TopWrapper,
  ExpDivTwo,
  ProjectTitle
} from "./styles/HomePage";
import javascript from "./assets/javascriptCard.svg";
import online from "./assets/online.svg";
import next from "./assets/next2.svg";
import react from "./assets/react.svg";
import imgBackOne from "./assets/ImageBack1.svg";
import projectOne from "./assets/projectOne.svg";
// import jfj from "./assets/mobilePrj.svg";
import link from "./assets/link.svg";
import Footer from "./components/Footer/Footer";
import image from "./assets/image.png"

export default function Home() {
  return (
    <div>
      <TopWrapper>
      <Header />
      </TopWrapper>
      <Wrapper>
        <Image src={hero} alt="About me" />
        <WrapperTitle>{`I'm a Software Engineer.|`} </WrapperTitle>
        <WrapperParagraph>
          A self-taught full-stack developer, dedicated to building robust and
          user-centric digital products that strike a balance between technical
          efficiency and business goals.
        </WrapperParagraph>
      </Wrapper>
      <ExperiencedWrapper>
        <ExperiencedDiv>
          <p>
            Years of <br />
            <ExpSpan>XP</ExpSpan>
            <br />
            with the most popular ecosystem frontend
          </p>
        </ExperiencedDiv>
        <CardWrapper>
          <CardOne>
            <Image src={javascript} alt="javascript"/>
            <p>Javascript</p>
          </CardOne>
          <CardTwo>
            <Image src={react} alt="react"/>
            <p>React</p>
          </CardTwo>
          <CardThree>
            <Image src={next} height={52} width={52} alt="next"/>
            <p>Next.JS</p>
          </CardThree>
        </CardWrapper>
      </ExperiencedWrapper>
      <TextWrapper>
        <TextOne>MongoDB</TextOne>
        <TextTwo>Express</TextTwo>
        <TextTwo>React</TextTwo>
        <TextFour>NodeJS</TextFour>
      </TextWrapper>
      <div>
        <WorkText>Work Experience</WorkText>
        <ExpWrapper>
          <ExpDivOne>
            <ExpText>Front-End Developer Intern</ExpText>
            {/* <ExpSub>Contract</ExpSub> */}
            <ExpSub>
              May 2024{" "}
              <span>
                <Image src={online} alt="online"/>
              </span>
              Present <br />
              Brookes - Nigeria
            </ExpSub>
          </ExpDivOne>
          <ExpDivTwo>
            <h4 style={{color:'#B292FF'}}>Brookes</h4>
            <p>
              Developed responsive web interfaces using HTML, CSS, and
              JavaScript, enhancing user experience and accessibility.
              Implemented interactive features with React, improving user
              engagement. Optimized website performance and integrated RESTful
              APIs for real-time updates.
            </p>
          </ExpDivTwo>
        </ExpWrapper>
      </div>

      <div>
        <ImageStyle>
          <TextWpp>
            <TextPrj>
            <h4 style={{ marginLeft: 20, color: "#9857D3", fontSize: "16px" }}>
              Featured Project
            </h4>
            <ProjectTitle>
              Frontend E-commerce Store
            </ProjectTitle>
            </TextPrj>
            <ImageTextOne>
              A React-based eCommerce web app designed to enhance the online
              shopping experience for clients. Features include a robust search
              and filter system, cart management with local storage persistence,
              and responsive design for various devices. Engaging hover
              animations add interactivity, while state management is handled
              efficiently using React hooks and context API. This project
              allowed me to practice React concepts and deliver a polished
              product that received positive client feedback.
            </ImageTextOne>
            {/* <div style={{maxWidth:'100%'}}> */}

            <Image src={image} alt="ecommere" height={200} style={{width:'80vw',marginLeft:'50px',marginRight:'auto'}}/>
            {/* </div> */}
            <LinkWrapper>
              <Image src={link} alt="link" /> Live Link
            </LinkWrapper>
          </TextWpp>
          {/* <TextPrj1>
            <h4 style={{ marginLeft: 20, color: "#9857D3", fontSize: "16px" }}>
              Featured Project
            </h4>
            <ProjectTitle>
              Frontend E-commerce Store
            </ProjectTitle>
            </TextPrj1> */}
          <Image src={projectOne} alt="ecommere"/>
        </ImageStyle>
      </div>

      <ContactWrapper>
        <ContactHeader>Contact</ContactHeader>
        <ContactText>{`I'm currently looking to join a cross-functional team that values improving people's lives
through accessible design. or have a project in mind? Let's connect.${`<br />`}idowumicheal506@gmail.com`}</ContactText>
      </ContactWrapper>

      <Footer />
    </div>
  );
}
