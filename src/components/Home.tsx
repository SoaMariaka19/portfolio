import { HomeContainer, StyledTitle, StyledSubtitle} from '../styles/customStyles';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <HomeContainer id="home">
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="80px">
        <Box>
          <StyledTitle variant="h4" gutterBottom>
            Hello! I'm Soa Mariaka
          </StyledTitle>
          <StyledSubtitle variant="h6" paragraph>
            Junior Front-End Developer passionate about building intuitive and effective user interfaces.
          </StyledSubtitle>
        </Box>
        <img src="../assets/img.png" alt="Soa Mariaka" width="300" />
      </Box>
    </HomeContainer>
  );
};

export default Home;