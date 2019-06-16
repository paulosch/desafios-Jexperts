import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: static;
  top: 0;
  background: rgba(36, 123, 160, 1);
  padding: 15px 0;
`
export const Logout = styled.div`
  display: flex;
  justify-content: flex-end;

  a,
  button {
    color: #eee;
    cursor: pointer;
    font-size: 13px;
    background: none;
    border: none;
    padding: 0;
  }
`
