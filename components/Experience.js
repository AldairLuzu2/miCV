import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Experience = () => {
  const jobs = [
    {
      title: 'Desarrollador Frontend',
      company: 'Empresa XYZ',
      duration: 'Ene 2021 - Presente',
      description: 'Desarrollo de interfaces de usuario modernas y responsivas.',
    },
    {
      title: 'Practicante de Desarrollo',
      company: 'Empresa ABC',
      duration: 'Jun 2020 - Dic 2020',
      description: 'Colaboración en proyectos de desarrollo web.',
    },
  ];

  return (
    <Box id="experiencia" className="section" sx={{ bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Experiencia
        </Typography>
        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography color="text.secondary">{job.company}</Typography>
                  <Typography color="text.secondary">{job.duration}</Typography>
                  <Typography>{job.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;