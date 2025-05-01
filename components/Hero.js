import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box id="inicio" className="section" sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Hola, soy Aldair Luzuriaga
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Programador Junior | Especialista en Desarrollo de Sitios Web
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" size="large" href="#contacto" className="button-primary">
            Contáctame
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;