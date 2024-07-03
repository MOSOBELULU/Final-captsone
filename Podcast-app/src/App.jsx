import './App.css';
import PodcastList from './components/PodcastList';
import Footer from './components/Footer';
import { useState } from 'react';
import Authentication from './components/Authentication';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    setIsAuthenticated(true)
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Authentication onAuth={handleAuth} />
      ) : (
        <>
          <PodcastList />
          <Footer />
          
        </>
      )}
    </div>
  );
}
