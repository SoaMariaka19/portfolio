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
            Passionate about Front-End development, I love bringing interfaces to life with the perfect blend of aesthetics, fluidity, and performance. <br/>
            What drives me? Finding creative solutions, learning every day, and collaborating with inspiring people. Curious and detail-oriented, I enjoy tackling challenges and refining every aspect to deliver the best possible user experience. I like to keep things structured and efficient while maintaining a relaxed and positive mindset—something you’ll find reflected in my work.<br/> My goal: to create seamless, engaging, and memorable digital experiences
          </StyledSubtitle>
        </StyledTextBox>
        <StyledImage src={img} alt="Soa Mariaka"/>
      </StyledHomeBox>
    </HomeContainer>
  );
};

export default Home;
