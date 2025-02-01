import { TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <form id='contact' style={{paddingTop: '80px'}}>
      <TextField label="Nom" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Envoyer
      </Button>
    </form>
  );
};

export default Contact;
