import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
    // height: 100vh;
  overflow: none;

  padding: 0 5rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 400px;
  margin: 0 2rem 2rem 0;
  padding-top: 2rem;
  position: sticky;
  align-self: flex-start;
  top: 0;
`;
export const Courses = styled.div`
  // grid-area: courses;
  display: flex;
  flex-direction: column;

  flex: 3;

  padding-top: 2rem;
`;
