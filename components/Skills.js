import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Link } from '@mui/material';
import {
  Code as CodeIcon,
  Css as CssIcon,
  Javascript as JavascriptIcon,
  Storage as StorageIcon,
  Palette as PaletteIcon,
  DataObject as PhpIcon,
  Storage as SqlIcon,
  Terminal as PythonIcon,
  BugReport as JavaIcon,
  Api as RubyIcon,
  Functions as GoIcon,
} from '@mui/icons-material';
import { SiReact } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <CodeIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
  { name: 'CSS', icon: <CssIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
  { name: 'JavaScript', icon: <JavascriptIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
  { name: 'React', icon: <SiReact size="2em" style={{ color: '#004439' }} />, url: 'https://es.reactjs.org/' },
  { name: 'Node.js', icon: <StorageIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://nodejs.org/es/' },
  { name: 'Material-UI', icon: <PaletteIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://mui.com/' },
  { name: 'PHP', icon: <PhpIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://www.php.net/' },
  { name: 'SQL', icon: <SqlIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://www.w3schools.com/sql/' },
  { name: 'Python', icon: <PythonIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://www.python.org/' },
  { name: 'Java', icon: <JavaIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://www.java.com/es/' },
  { name: 'Ruby', icon: <RubyIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://www.ruby-lang.org/es/' },
  { name: 'Go', icon: <GoIcon fontSize="large" sx={{ color: '#004439' }} />, url: 'https://golang.org/' },
];

const Skills = () => {
  return (
    <Box id="habilidades" className="section" sx={{ bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Habilidades
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link href={skill.url} target="_blank" rel="noopener" underline="none">
                <Card className="card">
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {skill.icon}
                    </Box>
                    <Typography variant="h6">
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;