import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    svg {
      width: ${theme.icons.sizes.medium};
      height: ${theme.icons.sizes.medium};
    }
  `}
`

export const Thumbnail = styled.div`
  ${({ src }) => css`
    background: url(${src});
    width: 100%;
    height: 20rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.5rem;
      background: red;
      bottom: 0;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.spacings.small} 0;
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const Heart = styled.img`
  ${({ theme }) => css`
    width: ${theme.font.sizes.small}; ;
  `}
`
