import { Typography } from '@mui/material';
import { StyledForm, StyledFormButton, StyledFormContainer, StyledTextField } from '../styles/customStyles';

const Contact = () => {
  return (
    <StyledFormContainer id='contact'>
      <StyledForm >
        <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'center' }}>
          Do you have a project or an opportunity to discuss? Feel free to contact me, I would be happy to connect with you!
        </Typography>

        <StyledTextField label="Nom" variant="outlined" fullWidth margin="normal" />
        <StyledTextField label="Email" variant="outlined" fullWidth margin="normal" />
        <StyledTextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
        <StyledFormButton type="submit" variant="contained" color="primary">
          Envoyer
        </StyledFormButton>
      </StyledForm>
    </StyledFormContainer>
    
  );
};

export default Contact;
