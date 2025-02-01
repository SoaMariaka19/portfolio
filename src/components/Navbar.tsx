import { Link } from 'react-scroll';
import { StyledNavbar, StyledToolbar, StyledButton } from '../styles/customStyles'; // Import des styles
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledToolbar>
        <Typography variant="h6" color="inherit">
          Soa Mariaka's Portfolio
        </Typography>
        <div>
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
            <Link to="home" smooth duration={500}>Download CV</Link>
          </StyledButton>
          </div>
      </StyledToolbar>
    </StyledNavbar>
  );
};

export default Navbar;
