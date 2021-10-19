import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-content: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextContainer = styled.div`
  text-align: center;
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const HeroActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ResultTitle = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    > div {
      margin: ${theme.spacings.xxsmall};
    }
  `}
`

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeroActionContainer = styled.div`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    margin: ${theme.spacings.xsmall};
    opacity: ${isActive
      ? `${theme.opacity.default}`
      : `${theme.opacity.disabled}`};

    svg {
      width: ${theme.icons.sizes.medium};
      height: ${theme.icons.sizes.medium};
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const ToggleButton = styled.button`
  ${({ theme, isActive }) => css`
    width: 5rem;
    height: 2rem;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.lightGray};
    position: relative;
    border: none;
    outline: none;

    &:before {
      content: '';
      position: absolute;
      background: ${theme.colors.primary};
      box-shadow: ${theme.shadows.small} ${theme.colors.primary};
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      top: 0.2rem;
      left: 0.5rem;
      transform: ${isActive ? 'translateX(2.5rem)' : 'translateX(0)'};
      transition: all 200ms ease-in-out;
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 20rem));
    place-content: center;
    gap: ${theme.spacings.xxsmall};
    min-height: 300px;
  `}
`
