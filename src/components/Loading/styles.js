import styled, { keyframes, css } from 'styled-components'

const cycle = (primary) => keyframes`
  0% {box-shadow: -50px -50px 0 ${primary}, 50px -50px 0 ${primary}, -50px 50px 0 ${primary}, 50px 50px 0 ${primary}; transform: rotate(0deg);}
  50% {box-shadow: 0px -50px 0 ${primary}, 50px 0px 0 ${primary}, -50px 0px 0 ${primary}, 0px 50px 0 ${primary}; transform: rotate(45deg);}
  100% {box-shadow: 50px -50px 0 ${primary}, 50px 50px 0 ${primary}, -50px -50px 0 ${primary}, -50px 50px 0 ${primary}; transform: rotate(90deg);}
`

export const Container = styled.div`
  height: 50vh;
  display: grid;
  place-content: center;
`

export const Loader = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    background-color: transparent;
    box-shadow: -50px -50px 0 ${theme.colors.primary},
      50px -50px 0 ${theme.colors.primary}, -50px 50px 0 ${theme.colors.primary},
      50px 50px 0 ${theme.colors.primary};
    animation: 2s ${cycle(theme.colors.primary)} infinite
      cubic-bezier(0.71, 0.13, 0.32, 0.96);
  `}
`
