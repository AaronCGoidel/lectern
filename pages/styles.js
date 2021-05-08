import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100vh;  
`;

export const Main = styled.main`
`;

export const Hero = styled.section`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;


export default Container;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10vw;
    h1 {
        font-size: 4rem;
        font-weight: bold;
    }
    p {
        font-size: 1.3rem;
        padding-bottom: 20px;
    }
`;
export const HeroImage = styled.img`
    max-width: 50vw;
    padding-top: 15vh;
`;

export const About = styled.section`
    display: flex;
    height: 100vh;
    margin-left: 10vw;
    align-items: center;
`;
export const AboutImage = styled.img`
    width: 40vw;
    border-radius: 20px;
`;

export const AboutText = styled.div`
    margin: 30px;
    width: 35vw;
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }
    p {
        padding-top: 5vh;
        font-size: 1.3rem;
        padding-bottom: 5vh;
    }
    a {
        font-size: 1.3rem;
        color: #8C31F5;
    }
`;

export const Educators = styled.div`
    display: flex;
    margin-left: 10vw;
    flex-grow: 1;
    h2 {
        width: 42vw;
        font-size: 2.5rem;
        font-weight: bold;
    }
    p {
        width: 35vw;
        font-size: 1.3rem;
    }
`;
export const FooterImage = styled.img`
    padding: 3vw 10vw 3vw 10vw;
`;

export const Footer = styled.section`
    background-color: #8C30F5;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        width: 80vw;
        text-align: center;
        font-weight: bold;
        font-size: 4rem;
        color: white;
    }

`;