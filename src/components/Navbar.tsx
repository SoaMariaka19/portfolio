import { useState } from 'react';
import { Link } from 'react-scroll';
import { StyledNavbar, StyledToolbar, StyledButton, StyledDrawer, StyledLink, StyledNavTypography } from '../styles/customStyles'; 
import { IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  const toggleDrawer = () => {
    setOpen(!open); 
  };

  return (
    <StyledNavbar>
      <StyledToolbar>
        <StyledNavTypography variant="h6">
          Soa Mariaka's Portfolio
        </StyledNavTypography>

        <IconButton edge="end" color="inherit" onClick={toggleDrawer} sx={{ display: { sm: 'none' } }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <StyledDrawer
          anchor="top"
          open={open}
          onClose={toggleDrawer}
        >
          <IconButton onClick={toggleDrawer} sx={{alignSelf: 'flex-end', color: 'black'}}>
            <CloseIcon/>
          </IconButton>
          <StyledButton>
            <Link to="home" smooth duration={500}>Home</Link>
          </StyledButton>
          <StyledButton>
            <Link to="skills" smooth duration={500}>Skills</Link>
          </StyledButton>
          <StyledButton>
            <Link to="contact" smooth duration={500}>Contact</Link>
          </StyledButton>
          <StyledButton>
            <StyledLink href="/cv.pdf" download>
              Download CV
            </StyledLink>
          </StyledButton>
        </StyledDrawer>

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <StyledButton>
            <Link to="home" smooth duration={500}>Home</Link>
          </StyledButton>
          <StyledButton>
            <Link to="skills" smooth duration={500}>Skills</Link>
          </StyledButton>
          <StyledButton>
            <Link to="contact" smooth duration={500}>Contact</Link>
          </StyledButton>
          <StyledButton>
            <StyledLink href="/cv.pdf" download>
                Download CV
              </StyledLink>
          </StyledButton>
        </Box>
      </StyledToolbar>
    </StyledNavbar>
  );
};

export default Navbar;
