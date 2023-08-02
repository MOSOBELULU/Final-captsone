

import './App.css';
// import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import PodcastList from './components/PodcastList';
// import FavoritePodcasts from './components/Favorite';
import Footer from './components/Footer';

export default function App() {
  
  

  
  return (
    <>
    {/* <button onClick={() => window.location.href = "/favorites"}>Go to Favorite Podcasts</button> */}
        <LandingPage />
        <PodcastList/>
        <Footer />
    </>
  );
}