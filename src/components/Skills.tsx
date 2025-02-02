import { Box, Grid, Typography } from '@mui/material';
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
import { SkillIcon, StyledGridContainer } from '../styles/customStyles';

const Skills = () => {
  return (
    <Box id="skills" paddingTop="150px">
      <StyledGridContainer container spacing={10} justifyContent="center">
        <Grid item>
          <SkillIcon color="#61DBFB">
            <FaReact />
            <Typography>React</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#ffd600">
            <IoLogoJavascript />
            <Typography>JavaScript</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#007acc">
            <SiTypescript />
            <Typography>TypeScript</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#e64c18">
            <FaHtml5 />
            <Typography>HTML</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#004ce8">
            <IoLogoCss3 />
            <Typography>CSS</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#539e43">
            <FaNodeJs />
            <Typography>Node JS</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#007fff">
            <SiMui />
            <Typography>Material UI</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#5a29e4">
            <SiAxios />
            <Typography>Axios</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color="#f1502f">
            <FaGitAlt />
            <Typography>Git</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon>
            <IoLogoGithub />
            <Typography>Github</Typography>
          </SkillIcon>
        </Grid>
        <Grid item>
          <SkillIcon color='#0064a5'>
            <BiLogoPostgresql />
            <Typography>PostgreSQL</Typography>
          </SkillIcon>
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default Skills;