import React from 'react';
import useFetchJobs from './useFetchJobs'
import './App.css';
import {Container} from 'react-bootstrap'

function App() {
const {jobs, loading, error} = useFetchJobs()
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Oops...</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App;
