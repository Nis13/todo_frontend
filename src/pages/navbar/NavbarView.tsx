import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import { NavbarViewProps } from './navbar.types';

export const NavBarView = ({ pages, handleLogout, isAuthenticated }: NavbarViewProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            TodoApp
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'flex-end'
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(page =>
                page.isVisible ? (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <NavLink
                      key={page.name}
                      to={page.link}
                      style={({ isActive }) => ({
                        textDecoration: 'none',
                        backgroundColor: isActive ? '#C0C0C080' : ''
                      })}
                    >
                      <Button sx={{ color: 'inherit' }}>{page.name}</Button>
                    </NavLink>
                  </MenuItem>
                ) : null
              )}
              {isAuthenticated ? (
                <Button onClick={handleLogout}>
                  <Typography color="inherit" sx={{ textAlign: 'center' }}>
                    Logout
                  </Typography>
                </Button>
              ) : null}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            ToDoApp
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end'
            }}
          >
            {pages.map(page =>
              page.isVisible ? (
                <NavLink
                  key={page.name}
                  to={page.link}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: 'white',
                    backgroundColor: isActive ? '#C0C0C080' : ''
                  })}
                >
                  <Button sx={{ color: 'inherit' }}>{page.name}</Button>
                </NavLink>
              ) : null
            )}
            {isAuthenticated ? (
              <Button onClick={handleLogout}>
                <Typography color="white" sx={{ textAlign: 'center' }}>
                  Logout
                </Typography>
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
