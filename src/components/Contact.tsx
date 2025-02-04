import React, { useRef, useState } from 'react';
import { Typography, Grid, IconButton, Box, Snackbar, Alert } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { StyledForm, StyledFormButton, StyledContactContainer, StyledTextField, StyledTypography } from '../styles/customStyles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); 
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [openAlert, setOpenAlert] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) { 
      emailjs
        .sendForm('service_5zmjd59', 'template_dhx5qzk', form.current, {
          publicKey: 'nDkqitaE9l0p9K29Z',
        })
        .then(
          () => {
            setAlertMessage('Message envoyé avec succès!');
            setAlertType('success');
            setOpenAlert(true);
            form.current?.reset(); 
          },
          (error) => {
            setAlertMessage(`Échec de l'envoi: ${error.text}`);
            setAlertType('error');
            setOpenAlert(true);
          }
        );
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <StyledContactContainer id='contact'>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <StyledTypography variant="h6" style={{ marginBottom: '20px' }}>
            Let's work together to bring your projects to life. Contact me, I'm here to help you make it happen!
          </StyledTypography>
          <Box>
            <Typography variant="body1">Follow me on:</Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <IconButton component="a" href="https://www.linkedin.com/in/soa-mariaka-rakotomalala-42a30a278/" target="_blank" color="inherit">
                <FaLinkedin />
              </IconButton>
              <IconButton component="a" href="https://github.com/SoaMariaka19/" target="_blank" color="inherit">
                <FaGithub />
              </IconButton>
              <IconButton component="a" href="mailto:soamariakarakotomalala@gmail.com" color="inherit">
                <FaEnvelope />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledForm ref={form} onSubmit={sendEmail}>
            <StyledTextField label="Nom" variant="outlined" fullWidth margin="normal" name="user_name" />
            <StyledTextField label="Email" variant="outlined" fullWidth margin="normal" name="user_email" />
            <StyledTextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" name="message" />
            <StyledFormButton type="submit" variant="contained" color="primary">
              Envoyer
            </StyledFormButton>
          </StyledForm>
        </Grid>
      </Grid>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </StyledContactContainer>
  );
};

export default Contact;
