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
            A Front-End Developer passionate about creating clean, intuitive, and engaging interfaces. <br/>
            What drives me? Finding creative solutions, learning every day, and collaborating with inspiring people. I take my work seriously, but I believe the best results come from a relaxed and positive mindset. <br/>
            My goal? Build seamless and memorable digital experiences that make an impact.          
          </StyledSubtitle>
        </StyledTextBox>
        <StyledImage src={img} alt="Soa Mariaka"/>
      </StyledHomeBox>
    </HomeContainer>
  );
};

export default Home;
