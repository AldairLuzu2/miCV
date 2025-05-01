import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Email, LinkedIn, Instagram } from '@mui/icons-material'; // Cambia GitHub por Instagram

const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Sígueme en redes sociales
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="https://www.linkedin.com/in/aldair-luzuriaga-885b9b349/" target="_blank" rel="noopener" className="link">
            <LinkedIn fontSize="large" sx={{ color: '#000' }} />
          </Link>
          <Link href="https://www.instagram.com/_aldairluzu/profilecard/?igsh=ZGFtZThsMDczcmVs" target="_blank" rel="noopener" className="link">
            <Instagram fontSize="large" sx={{ color: '#000' }} /> 
          </Link>
          <Link href="mailto:aldairleon25@outlook.com" className="link">
            <Email fontSize="large" sx={{ color: '#000' }} />
          </Link>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © 2025 Aldair Luzuriaga. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;