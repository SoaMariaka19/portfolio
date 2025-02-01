import { useState, useEffect } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import { StyledFab } from '../styles/customStyles';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <StyledFab color="primary" onClick={scrollToTop}>
        <ArrowUpward />
      </StyledFab>
    )
  );
};

export default BackToTop;
