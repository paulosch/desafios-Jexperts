import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;

  > form {
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

      &::placeholder {
        opacity: 0.5;
      }
    }

    button {
      justify-content: center;
      background: #1ebe1e;
      color: #fff;
      border: 1px solid transparent;

      &:hover {
        background: #fff;
        color: #1ebe1e;
        border: 1px solid #1ebe1e;
        cursor: pointer;
      }
    }

    span {
      font-size: 10px;
      color: #aaa;

      a {
        color: #1ebe1e;
      }
    }
  }
`
export const Error = styled.div`
  display: flex;
  color: red;
  justify-content: center;
  margin-top: 10px;
  font-size: 13px;
`
