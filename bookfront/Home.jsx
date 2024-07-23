// import React from 'react';
// import { Typography } from '@mui/material';

// const Home = () => {
//   return (
//     <div>
//       <Typography variant="h2">Welcome to the Book Store</Typography>
//       <Typography variant="h6">Find your favorite books here!</Typography>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Typography, Button, Grid, Paper, Box } from '@mui/material';

// const paperStyle = {
//   padding: '20px',
//   textAlign: 'center',
//   color: '#333',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   backgroundColor: '#fff',
// };

// const buttonStyle = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   backgroundColor: '#3f51b5',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
//   minHeight: '100vh',
//   padding: '20px',
// };

// const boxStyle = {
//   marginTop: '20px',
//   display: 'flex',
//   justifyContent: 'center',
//   flexWrap: 'wrap',
// };

// const gridItemStyle = {
//   flex: '1 1 calc(33.333% - 20px)',
//   margin: '10px',
//   maxWidth: 'calc(33.333% - 20px)',
// };

// const Home = () => {
//   return (
//     <div style={containerStyle}>
//       <Paper style={paperStyle} elevation={3}>
//         <Typography variant="h2" gutterBottom>
//           Welcome to the Book Store
//         </Typography>
//         <Typography variant="h6" paragraph>
//           Discover a world of books and find your next great read! Whether you're into fiction, non-fiction, or anything in between, we have something for everyone.
//         </Typography>
//         <Button style={buttonStyle} variant="contained">
//           Explore Now
//         </Button>
//       </Paper>
//       <Box style={boxStyle}>
//         <div style={gridItemStyle}>
//           <Paper style={paperStyle} elevation={3}>
//             <Typography variant="h5">New Arrivals</Typography>
//             <Typography style={{ fontWeight: 300 }}>
//               Check out the latest additions to our collection!
//             </Typography>
//           </Paper>
//         </div>
//         <div style={gridItemStyle}>
//           <Paper style={paperStyle} elevation={3}>
//             <Typography variant="h5">Best Sellers</Typography>
//             <Typography style={{ fontWeight: 300 }}>
//               Browse the books that everyone's talking about!
//             </Typography>
//           </Paper>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: 'center',
          color: '#333',
          background: 'linear-gradient(to right, #ffffff, #f1f1f1)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          maxWidth: 800,
          width: '100%',
        }}
        elevation={3}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#3f51b5',
            mb: 2,
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Welcome to the Book Store
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#555',
            mb: 3,
            fontSize: '1.2rem',
            fontWeight: '300',
            lineHeight: '1.6',
          }}
        >
          Discover a world of books and find your next great read! Whether you're into fiction, non-fiction, or anything in between, we have something for everyone.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            padding: '12px 24px',
            backgroundColor: '#3f51b5',
            color: '#fff',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
          }}
        >
          Explore Now
        </Button>
      </Paper>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
                color: '#fff',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
              }}
              elevation={3}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                New Arrivals
              </Typography>
              <Typography sx={{ fontWeight: 300 }}>
                Check out the latest additions to our collection!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                color: '#fff',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
              }}
              elevation={3}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Best Sellers
              </Typography>
              <Typography sx={{ fontWeight: 300 }}>
                Browse the books that everyone's talking about!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
