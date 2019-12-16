import React from 'react';
import './scss/main.scss';
import { Layout } from './common/layout';
import { TeamsContextProvider } from './context';


function App() {
  return (
    <div className="App">
      <TeamsContextProvider teams={[]}>
        <Layout />
      </TeamsContextProvider>
    </div>
  );
}

export default App;
