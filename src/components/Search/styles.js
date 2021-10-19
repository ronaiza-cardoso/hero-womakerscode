import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor};
    border-radius: ${theme.border.radius};
    padding: ${theme.font.sizes.small};
    margin-top: ${theme.font.sizes.large};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
      width: ${theme.icons.sizes.medium};
      height: ${theme.icons.sizes.medium};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    width: 100%;
    height: 100%;
    padding-left: ${theme.font.sizes.xxlarge};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
    background: transparent;
    outline: none;

    ::placeholder {
      color: ${theme.colors.primary};
      opacity: 0.4;
    }

    :-ms-input-placeholder {
      color: ${theme.colors.primary};
    }

    ::-ms-input-placeholder {
      color: ${theme.colors.primary};
    }
  `}
`
