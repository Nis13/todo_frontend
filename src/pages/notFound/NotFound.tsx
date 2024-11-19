import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: 'primary.main',
          marginBottom: 2
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: '1.25rem',
          color: 'text.secondary',
          marginBottom: 4
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Return to Homepage
        </Button>
      </Link>
    </Container>
  );
};

export default Notfound;
