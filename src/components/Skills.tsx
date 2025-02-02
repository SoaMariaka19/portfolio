import { Grid, Typography } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SkillIcon, StyledGridContainer, StyledSkillsContainer } from '../styles/customStyles';

const Skills = () => {
  return (
    <StyledSkillsContainer id="skills">
      <StyledGridContainer container spacing={3} justifyContent="center">
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#61DBFB">
            <FaReact />
            <Typography>React</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#ffd600">
            <IoLogoJavascript />
            <Typography>JavaScript</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#007acc">
            <SiTypescript />
            <Typography>TypeScript</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#e64c18">
            <FaHtml5 />
            <Typography>HTML</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2} >
          <SkillIcon color="#004ce8">
            <IoLogoCss3 />
            <Typography>CSS</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#539e43">
            <FaNodeJs />
            <Typography>Node JS</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#007fff">
            <SiMui />
            <Typography>Material UI</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#5a29e4">
            <SiAxios />
            <Typography>Axios</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color="#f1502f">
            <FaGitAlt />
            <Typography>Git</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon>
            <IoLogoGithub />
            <Typography>Github</Typography>
          </SkillIcon>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <SkillIcon color='#0064a5'>
            <BiLogoPostgresql />
            <Typography>PostgreSQL</Typography>
          </SkillIcon>
        </Grid>
      </StyledGridContainer>
    </StyledSkillsContainer>
  );
};

export default Skills;