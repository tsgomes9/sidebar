import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { menuItems } from './components/menuItems'

import { BoxStyled } from './components/BoxStyled'
import { SectionBoxStyled } from './components/SectionBoxStyled'
import { IconStyled } from './components/IconStyled'
import { LinkArea } from './components/LinkArea'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <BoxStyled sx={{ width: isOpen ? '15rem' : '5rem' }}>
          <SectionBoxStyled
            sx={{ justifyContent: isOpen ? 'space-between' : 'center' }}
          >
            <Typography sx={{ display: isOpen ? 'block' : 'none' }}>
              Logo
            </Typography>
            <IconStyled>
              <span className="material-symbols-outlined" onClick={toggle}>
                menu
              </span>
            </IconStyled>
          </SectionBoxStyled>

          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <LinkArea
                sx={{
                  justifyContent: isOpen ? '' : 'center',
                }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>

                <Typography sx={{ display: isOpen ? 'block' : 'none', mx: 2 }}>
                  {item.name}
                </Typography>
              </LinkArea>
            </NavLink>
          ))}
        </BoxStyled>
        <Outlet />
      </Box>
    </>
  )
}
