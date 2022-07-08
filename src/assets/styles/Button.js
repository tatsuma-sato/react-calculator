import styled from "styled-components/macro";

export const Btn = styled.button`
  border: none;
  /* background-color: rgb(80, 60, 209); */
  font-size: 24px;
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  outline: none;

  &:hover {
    background-color: rgb(61, 43, 184);
  }

  &.zero {
    grid-column: 1/3;
    border-radius: 100px;
    background-color: var(--dark-gray);
    text-align: left;
    padding-left: 35px;
  }

  &.zero:hover {
    background-color: var(--dark-gray-hover);
  }


  &.symbol {
    background-color: var(--light-gray);
    color: black;
  }
  &.symbol:hover {
    background-color: var(--light-gray-hover);
  }

  &.num {
    background-color: var(--dark-gray);
    color: var(--white);
  }
  &.num:hover {
    background-color: var(--dark-gray-hover);
  }

  &.operations {
    background-color: var(--orange);
    color: var(--white);
  }
  &.operations:hover {
    background-color: var(--orange-hover);
  }
`;
