import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: none;

  padding: 0 5rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  background: linear-gradient(to right, #d9a7c7, #fffcdc);
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 400px;
  margin: 2rem 2rem 2rem 0;
  position: sticky;
  align-self: flex-start;
  top: 0;

  @media (max-width: 840px) {
    margin: 0;
    // padding: 0 3rem;
    min-width: 100vw;
  }
`;
export const Courses = styled.div`
  // grid-area: courses;
  display: flex;
  flex-direction: column;

  flex: 3;

  padding-top: 2rem;
`;

export default Container;
