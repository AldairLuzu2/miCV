import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contacto" className="section" sx={{ bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Contacto
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box className="contact-form">
              <form>
                <TextField fullWidth label="Nombre" margin="normal" required />
                <TextField fullWidth label="Correo electrónico" margin="normal" required />
                <TextField fullWidth label="Mensaje" margin="normal" multiline rows={4} required />
                <Box sx={{ mt: 2 }}>
                  <Button type="submit" variant="contained" size="large" className="button-primary">
                    Enviar
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;