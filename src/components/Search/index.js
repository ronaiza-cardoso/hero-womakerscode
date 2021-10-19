import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Loupe } from 'assets/icons/loupe.svg'

import theme from 'styles/theme'
import * as S from './styles'

function Search({ placeholder, onChange, backgroundColor }) {
  return (
    <S.Container backgroundColor={backgroundColor}>
      <Loupe />
      <S.Input
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.Container>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
}

Search.defaultProps = {
  backgroundColor: theme.colors.lightPink,
}

export default Search
