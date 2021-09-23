import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SearchShow from './Page/SearchShow';
import People from './Page/People';
import Shows from './Page/Shows';
import Box from '@mui/material/Box';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box>
        <AppBar position='static' color='transparent'>
          <Toolbar>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Typography variant='h6' component='div' >
                  AwanooTv
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button variant='text' color='inherit'>Shows</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='text' color='inherit'>Search Show</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='text' color='inherit'>Search People</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth='lg' fixed>
        <Switch>
          <Route path='/shows'>
            <Shows />
          </Route>
          <Route path='/search-show'>
            <SearchShow />
          </Route>
          <Route path='/search-peple'>
            <People />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
