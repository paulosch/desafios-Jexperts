import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px;

  > form {
    display: flex;
    width: 100%;
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

    span {
      font-size: 10px;
      color: #aaa;

      a {
        color: #1ebe1e;
      }
    }
  }

  strong {
    display: flex;
    color: #4e4e4e;
    margin-bottom: 15px;
  }
`
export const Divisor = styled.span`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #a9aea9;
  margin: 15px 0;
`
export const Input = styled.input`
  background: #eee;
  font-size: 13px;

  &::placeholder {
    opacity: 0.5;
  }
`

export const Button = styled.input`
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
`
