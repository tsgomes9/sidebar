import Box from '@mui/material/Box'
import styled from 'styled-components'

export const LinkArea = styled(Box)({
  textDecoration: 'none',
  display: 'flex',
  color: '#575757',
  padding: '1rem 1rem',
  flexWrap: 'nowrap',
  ':hover': {
    backgroundColor: '#F1F1F1',
  },
  ':active': {
    color: '3B4F8C',
  },
})
