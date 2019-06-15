import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
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
      font-size: 13px;

      &::placeholder {
        opacity: 0.5;
      }
    }

    input {
      background: #eee;
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
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  > div {
    padding: 15px 25px;
  }
`

export const Button = styled.button`
  width: 250px;
  justify-content: center;
  background: ${props => (props.danger ? '#cf1212' : '#1ebe1e')};
  color: #fff;

  &:hover {
    background: ${props => (props.danger ? '#611212' : '#09952c')};
    color: ${props => (props.danger ? '#cf1212' : '#1ebe1e')};
    cursor: pointer;
  }
`

export const Error = styled.div`
  display: flex;
  color: red;
  justify-content: center;
`
