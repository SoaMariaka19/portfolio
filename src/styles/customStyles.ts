import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Typography, List, Link, Fab, Drawer } from '@mui/material';

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

export const SkillIcon = styled('div')<SkillIconProps>(({color}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& p': {
    fontSize: '14px',
  },
  '& svg': {
    width: '50px',
    height: '50px',
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
}));

export const StyledFooter = styled('footer')({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const LeftSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '30rem'
})

export const NavList = styled(List)(({theme})=>({
  '& li': {
    padding: '5px 0',
  },
  fontFamily: theme.typography.fontFamily,
}));

export const RightSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '30rem'
})

export const SocialIcons = styled('div')({
  display: 'flex',
  gap: '10px',
  marginTop: '5px',
});

export const NavLink = styled(Link)<{to?: string}>({
  textDecoration: 'none',
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