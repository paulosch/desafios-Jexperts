import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background: #fff;
    box-shadow: 6px 6px 19px -5px rgba(0, 0, 0, 0.75);

    input,
    button {
      width: 100%;
      border: 0;
      display: flex;
      align-items: center;
      padding: 15px 25px;
      margin-bottom: 10px;
    }

    input {
      background: #eee;
      font-size: 13px;

      &:hover {
        color: #fff;
      }
    }

    button {
      justify-content: center;
      background: #1ebe1e;
      color: #fff;
    }

    span {
      font-size: 10px;
      color: #ccc;

      a {
        color: #1ebe1e;
      }
    }
  }
`
