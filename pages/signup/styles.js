import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #a8ff78, #78ffd6);
    h1 {
        font-size: 3rem;
        font-weight: bold;
    }
    p {
        padding: 10px;
    }
`;

export default Container;