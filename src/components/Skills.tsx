import { Grid, Typography } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import figma from '../assets/figma.png';
import { SkillIcon, StyledGridContainer, StyledSkillsContainer, IconImage } from '../styles/customStyles';

const Skills = () => {
  return (
    <StyledSkillsContainer id="skills">
      <Typography variant="h4" color="#691143" align="center" 
          sx={{ 
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: { xs: "1.7rem", sm: "2rem" }
          }}
          gutterBottom
      >
        MY SKILLS
      </Typography>
      <Typography variant="h6" color="#691143" align="center" 
          sx={{ 
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: { xs: "1.1rem", sm: "1.3rem" }
          }}
            paragraph
      >
        Transforming ideas into seamless and engaging user experiences
      </Typography>
      <StyledGridContainer container spacing={3} justifyContent="center">
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#61DBFB">
              <FaReact />
              <Typography>React</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#ffd600">
              <IoLogoJavascript />
              <Typography>JavaScript</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#007acc">
              <SiTypescript />
              <Typography>TypeScript</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#e64c18">
              <FaHtml5 />
              <Typography>HTML</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#004ce8">
              <IoLogoCss3 />
              <Typography>CSS</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#539e43">
              <FaNodeJs />
              <Typography>Node JS</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#007fff">
              <SiMui />
              <Typography>Material UI</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon>
              <IconImage src={figma} />
              <Typography>Figma</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color="#f1502f">
              <FaGitAlt />
              <Typography>Git</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon>
              <IoLogoGithub />
              <Typography>Github</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <SkillIcon color='#0064a5'>
              <BiLogoPostgresql />
              <Typography>PostgreSQL</Typography>
            </SkillIcon>
          </motion.div>
        </Grid>
      </StyledGridContainer>
    </StyledSkillsContainer>
  );
};

export default Skills;
