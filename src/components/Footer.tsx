import { Typography, Grid, Link, ListItem, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { LeftSection, NavLink, NavList, RightSection, SocialIcons, StyledFooter } from '../styles/customStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container justifyContent="space-between">
        
        <LeftSection>
          <NavList>
            <ListItem><NavLink to="/">Home</NavLink></ListItem>
            <ListItem><NavLink to="/skills">Skills</NavLink></ListItem>
            <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
          </NavList>
          <Typography>© {new Date().getFullYear()} Soa Mariaka</Typography>
        </LeftSection>

        <RightSection>
          <Typography variant="body2">Follow me</Typography>
          <SocialIcons>
            <IconButton component={Link} href="https://www.linkedin.com/in/soa-mariaka-rakotomalala-42a30a278/" target="_blank" color="inherit">
              <FaLinkedin />
            </IconButton>
            <IconButton component={Link} href="https://github.com/SoaMariaka19/" target="_blank" color="inherit">
              <FaGithub />
            </IconButton>
            <IconButton component={Link} href="mailto:soamariakarakotomalala@gmail.com" color="inherit">
              <FaEnvelope />
            </IconButton>
          </SocialIcons>
        </RightSection>

      </Grid>
    </StyledFooter>
  );
};

export default Footer;