import { useRef, useState } from 'react';
import { Typography, Grid, IconButton, Box, Snackbar, Alert } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { StyledForm, StyledFormButton, StyledContactContainer, StyledTextField, StyledTypography } from '../styles/customStyles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [openAlert, setOpenAlert] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'user_email') {
      validateEmail(value);
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_5zmjd59', 'template_dhx5qzk', form.current, {
          publicKey: 'nDkqitaE9l0p9K29Z',
        })
        .then(
          () => {
            setAlertMessage('Message sent successfully !');
            setAlertType('success');
            setOpenAlert(true);
            setFormData({ user_name: '', user_email: '', message: '' });
            setEmailError('');
            form.current?.reset();
          },
          (error) => {
            setAlertMessage(`Failed to send: ${error.text}`);
            setAlertType('error');
            setOpenAlert(true);
          }
        );
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const isFormValid = formData.user_name && formData.user_email && formData.message && !emailError;

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
            <StyledTextField 
              label="Name" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              InputProps={{ style: { fontSize: '1.2rem' } }} 
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
            <StyledTextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              FormHelperTextProps={{ sx: { fontSize: '1.1rem' } }}
              InputProps={{ style: { fontSize: '1.2rem' } }}
              InputLabelProps={{ style: { fontSize: '1rem' } }} 
            />
            <StyledTextField 
              label="Message" 
              variant="outlined" 
              fullWidth 
              multiline 
              rows={4} 
              margin="normal" 
              name="message"
              value={formData.message}
              onChange={handleChange}            
              InputProps={{ style: { fontSize: '1.2rem' } }} 
              InputLabelProps={{ style: { fontSize: '1rem' } }} 
            />
            <StyledFormButton type="submit" variant="contained" color="primary" disabled={!isFormValid}>
              Send
            </StyledFormButton>
          </StyledForm>
        </Grid>
      </Grid>

      <Snackbar 
        open={openAlert} 
        autoHideDuration={6000} 
        onClose={handleCloseAlert} 
        sx={{ width: '30%' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity={alertType} 
          sx={{ 
            width: '50%', 
            fontSize: '1.2rem', 
            padding: '10px 20px', 
          }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </StyledContactContainer>
  );
};

export default Contact;
