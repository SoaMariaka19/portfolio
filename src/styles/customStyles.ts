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
  color: theme.palette.common.white,
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

export const HomeContainer = styled('div')({
  padding: '12px',
});

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.primary.main,
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.secondary.main,
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

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '400px', 
  },
}));

export const StyledLink = styled('a')(() => ({
  color: 'white',
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
    animation: 'pulse 1s infinite',
    fill: color || '#000',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
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
});

export const StyledFormButton = styled(Button)({
  marginTop: '10px',
});

export const StyledContactContainer = styled('div')({
  border: '1px solid #ddd', 
  padding: '20px',
  margin: '200px auto',
  maxWidth: '1200px',
  borderRadius: '8px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: theme.palette.primary.main, 
  color: '#fff', 
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, 
  },
}));