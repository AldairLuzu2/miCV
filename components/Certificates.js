import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const certificates = [
  {
    title: 'React Avanzado',
    image: 'https://i.pinimg.com/736x/8c/79/08/8c7908f05f6ac9eedd9715e026d0e9af.jpg',
    link: 'src/images/Certificado1.png',
  },
  {
    title: 'Proyecto Pis',
    image: 'https://i.pinimg.com/736x/98/45/fd/9845fd9731ab4cb06e2228b495f2a7bb.jpg',
    link: '',
  },
  {
    title: 'Next.Js',
    image: 'https://i.pinimg.com/736x/cb/73/c3/cb73c3eb5e4c3428d96d964f2c384b23.jpg',
    link: '',
  },
  {
    title: 'Python3',
    image: 'https://i.pinimg.com/736x/47/7a/3a/477a3adad89c7097f8db44e46ac6d11b.jpg',
    link: '',
  },
  {
    title: 'Proyecto Pis',
    image: 'https://i.pinimg.com/736x/64/4f/3b/644f3b535975aecd4ff22dfc9357a630.jpg',
    link: 'https://i.pinimg.com/736x/64/4f/3b/644f3b535975aecd4ff22dfc9357a630.jpg',
  },
  {
    title: 'Proyecto Pis',
    image: 'https://i.pinimg.com/736x/a8/35/c2/a835c23d168631488fe50d66a4d9f6f4.jpg',
    link: 'https://i.pinimg.com/736x/a8/35/c2/a835c23d168631488fe50d66a4d9f6f4.jpg',
  },
];

const Certificates = () => {
  return (
    <Box id="certificados" className="section" sx={{ bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Certificados
        </Typography>
        <Grid container spacing={4}>
          {certificates.map((certificate, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="card">
                <CardMedia component="img" height="140" image={certificate.image} alt={certificate.title} />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {certificate.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certificates;