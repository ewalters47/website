import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);