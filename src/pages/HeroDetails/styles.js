import styled, { css, keyframes } from 'styled-components'

const floating = keyframes`
  0 { transform: translate(0,  0px); }
  65%  { transform: translate(0, 15px); }
  to   { transform: translate(0, -0px); }    
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.large};
    min-height: 100vh;
  `}
`

export const HeaderContainer = styled.header`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(auto, 40rem));
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled.div`
  ${({ src }) => css`
    background: url(${src});
    width: 15rem;
    height: 5rem;
    background-size: contain;
    background-repeat: no-repeat;
  `}
`

export const LogoText = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
export const Main = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
  `}
`

export const InfoContainer = styled.span`
  ${({ theme, backgroundName }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-content: space-around;
    position: relative;
    z-index: ${theme.layers.alwaysOnTop};

    &:before {
      content: '${backgroundName}';
      position: absolute;
      left: 0;
      font-size: clamp(1vw, 15vw, 10vw);
      text-transform: uppercase;
      font-weight: 600;
      color: ${theme.colors.white};
      z-index: -1;
      animation-name: ${floating};
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxlarge};
  `}
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large} 0;
  `}
`
export const ContentDetailsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const HeroDetailsContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const HeroLineInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings.xxsmall};
    ${H2} {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`

export const H2 = styled.h2`
  ${({ theme, isDisabled }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.lineHeight};
    color: ${theme.colors.black};
    opacity: ${isDisabled
      ? `${theme.opacity.disabled}`
      : `${theme.opacity.default}`};
  `}
`

export const Title = styled.h1``
export const P = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.lineHeight};
    color: ${theme.colors.gray};
  `}
`

export const Thumbnail = styled.div`
  ${({ src }) => css`
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20rem;
    height: 40rem;
  `}
`

export const LastComicsContainer = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    position: relative;
  `}
`

export const LastComicsTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin: ${theme.spacings.large} 0;
  `}
`

export const LastComicsContentContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    place-content: center;
    gap: ${theme.spacings.medium};
  `}
`

export const ComicCard = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
  `}
`

export const ComicPhoto = styled.div`
  ${({ src, theme }) => css`
    background: url(${src});
    width: 10rem;
    height: 10rem;
    background-size: contain;
    background-repeat: no-repeat;
    margin: ${theme.spacings.xsmall} auto;
  `}
`
export const ComicTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`
