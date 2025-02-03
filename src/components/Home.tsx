import { HomeContainer, StyledTitle, StyledSubtitle, StyledHomeBox, StyledImage, StyledTextBox } from '../styles/customStyles';
import img from '../assets/img.png';

const Home = () => {
  return (
    <HomeContainer id="home">
      <StyledHomeBox>
        <StyledTextBox>
          <StyledTitle gutterBottom>
            Hello! <br/> I'm Soa Mariaka
          </StyledTitle>
          <StyledSubtitle paragraph>
            Junior Front-End Developer, passionate about creating intuitive and efficient interfaces.<br/> Curious and motivated, I'm constantly learning and evolving to improve.<br/> My goal? Build a fulfilling career in web development          
          </StyledSubtitle>
        </StyledTextBox>
        <StyledImage src={img} alt="Soa Mariaka"/>
      </StyledHomeBox>
    </HomeContainer>
  );
};

export default Home;
