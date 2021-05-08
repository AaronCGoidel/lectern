import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5rem;
    background-color: blue;

    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "controls courses";
`;

export const Controls = styled.div`
    grid-area: controls;
`;
export const Courses = styled.div`
    grid-area: courses;
`;