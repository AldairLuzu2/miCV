import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {
  Home as HomeIcon,
  Code as SkillsIcon,
  Work as ExperienceIcon,
  School as CertificatesIcon,
  Email as ContactIcon,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Button color="inherit" href="#inicio" startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button color="inherit" href="#habilidades" startIcon={<SkillsIcon />}>
          Habilidades
        </Button>
        <Button color="inherit" href="#experiencia" startIcon={<ExperienceIcon />}>
          Experiencia
        </Button>
        <Button color="inherit" href="#certificados" startIcon={<CertificatesIcon />}>
          Certificados
        </Button>
        <Button color="inherit" href="#contacto" startIcon={<ContactIcon />}>
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;