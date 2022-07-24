import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  min-height: 70px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-2);
  background: var(--white);

  text-transform: uppercase;

  h1 {
    font-size: 24px;
    color: var(--gray-6);
    font-weight: 400;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 44px;
  display: flex;
  background: red;
  overflow: hidden;
  border-radius: 3px;
  background: var(--gray-2);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--gray-3);
  }

  input {
    flex: 1;
    padding: 12px;

    border: 0;
    outline: 0;
    background: transparent;
  }

  button {
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--green);
    border: 0;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    color: var(--white);

    &:hover {
      filter: brightness(0.92);
    }
  }
`;

export const Main = styled.main`
  max-width: 768px;
  min-height: 320px;
  margin: 70px auto;

  display: flex;
  align-items: stretch;

  border-radius: 3px;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.075);
  background: var(--white);
`;

export const Avatar = styled.div`
  flex: 0 0 300px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background: var(--gray-0);
  position: relative;

  &::after {
    content: "";

    height: 100%;
    width: 4px;

    background: linear-gradient(var(--green), var(--blue));

    position: absolute;
    right: 0;
    top: 0;
  }

  .avatar-container {
    position: relative;
    width: 120px;
    height: 120px;
  }

  .avatar-border {
    width: 120px;
    height: 120px;
    background: linear-gradient(var(--green), var(--blue));
    border-radius: 50%;
    padding: 8px;

    animation: rotate 2s linear infinite;
  }

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;

    vertical-align: middle;

    position: absolute;
    top: 50%;
    left: 50%;

    margin-top: -55px;
    margin-left: -55px;
  }

  .avatar-username {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    span:first-child {
      font-weight: 600;
    }

    span:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
    }
  }

  .biography {
    font-size: 12px;
    font-weight: 300;
    text-align: center;
  }

  .followers-following {
    display: flex;
    gap: 24px;

    font-size: 14px;
    font-weight: 400;

    span {
      font-weight: 600;
    }
  }

  a {
    min-width: 120px;
    padding: 9px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    color: var(--white);
    background: var(--green);
    border-radius: 4px;
    cursor: pointer;

    transition: filter 0.2s ease;

    svg {
      font-size: 20px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Title = styled.h2`
  margin-top: 70px;

  color: var(--gray-6);
  font-weight: 400;
  text-align: center;
`;

export const RepositoriesContainer = styled.div`
  flex: 1;
  padding: 20px;

  ul {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 12px;
    max-height: 300px;

    padding: 0;
    padding-right: 8px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: var(--gray-3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(var(--green), var(--blue));
      border-radius: 6px;
    }
  }

  > h3 {
    font-weight: 600;
  }
`;

export const Repository = styled.li`
  flex: 0 1 calc((100% - 12px) / 2);
  background: var(--gray-1);
  border-radius: 2px;
  border: 1px solid var(--gray-3);
  padding: 10px;
  min-height: 65px;
  font-size: 11px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: border 0.3s, background 0.3s;

  &:hover {
    background: var(--green-light);
    border: 1px solid var(--green-dark);
  }

  h3 {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }

  h3 a {
    color: var(--gray-7);
  }

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
  }
`;
