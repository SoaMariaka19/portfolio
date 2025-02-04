import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Typography, Fab, Drawer, Box, Grid, TextField } from '@mui/material';

interface SkillIconProps {
  color?: string;  
}

export const StyledNavbar = styled(AppBar)(() => ({
  boxShadow: 'none',
  position: 'sticky',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledButton = styled(Button)<{component?: React.ElementType; to?: string; target?: string}>(({ theme }) => ({
  color: '#691143',
  fontWeight: 'bold',
  padding: '10px',
  fontFamily: theme.typography.fontFamily,
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledNavTypography = styled(Typography)(() => ({
  color: '#691143', 
}));

export const HomeContainer = styled('div')({
  padding: '12px',
});

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: '#691143',
  fontSize: theme.typography.h2.fontSize,
  
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: '#691143',
  fontSize: theme.typography.h5.fontSize,
  
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export const StyledHomeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '80px',
  flexDirection: 'column', 
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', 
  },
}));

export const StyledTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: "200px", 
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0px", 
    paddingBottom: '0px',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '500px',
  paddingRight: '150px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '400px', 
    paddingRight: '0px',
  },
}));

export const StyledLink = styled('a')(() => ({
  color: '#691143',
  textDecoration: 'none',
}));

export const StyledGridContainer = styled(Grid)(()=> ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 10px',
  width: '100%',
}))

export const SkillIcon = styled('div')<SkillIconProps>(({color, theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '80px',
  '& p': {
    fontSize: '15px',
  },
  '& svg': {
    width: '100px',
    height: '100px',
    fill: color || '#000',
  },
  [theme.breakpoints.down('md')]: {
    '& svg': {
      width: '80px',
      height: '80px',
    },
    '& p': {
      fontSize: '14px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& svg': {
      width: '60px',
      height: '60px',
    },
    '& p': {
      fontSize: '13px',
    },
  },
}));

export const StyledSkillsContainer = styled(Box)(({ theme }) => ({
  paddingTop: '20px',
  paddingBottom: '50px',
  backgroundColor: '#f4f4f4',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: '20px',
  },
}));

export const StyledForm = styled('form')({
  width: '100%',
  maxWidth: '1000px',  
  padding: '20px',
  boxSizing: 'border-box',
});

export const StyledTextField = styled(TextField)({
  marginBottom: '15px',  
  '& label.Mui-focused': {
    color: '#59555B',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#59555B',
    },
  },
});

export const StyledFormButton = styled(Button)(({theme})=>({
  marginTop: '10px',
  backgroundColor: '#691143',
  color: theme.palette.secondary.main,
}));

export const StyledContactContainer = styled('div')({
  border: '1px solid #ddd', 
  padding: '20px',
  margin: '100px auto',
  maxWidth: '1200px',
  borderRadius: '8px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#691143', 
  marginBottom: '20px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem', 
  },
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#691143', 
  color: '#fff', 
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, 
  },
}));