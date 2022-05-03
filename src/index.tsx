import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';
import { Container, ThemeProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />

        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);