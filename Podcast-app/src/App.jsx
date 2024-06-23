import './App.css';
import PodcastList from './components/PodcastList';
import Footer from './components/Footer';
// import Supa from './config/SupabaseClient';
// import { Supabase } from './config/SupabaseClient';
// import { useState, useEffect } from 'react';

export default function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   const authListener = (event, session) => {
  //     console.log("Auth state change event:", event);
  //     if (event === "SIGNED_IN" && session) {
  //       console.log("User signed in successfully:", session.user.email);
  //       setIsSignedIn(true);
  //     } else {
  //       setIsSignedIn(false);
  //     }
  //   };

  //   // Supabase.auth.onAuthStateChange(authListener);

  //   // Cleanup function, no need for removeAuthStateListener
  //   return () => {
  //     console.log("Unsubscribing from authListener");
  //     // Clean up any resources or state here (if needed), but no need to removeAuthStateListener
  //   };
  // }, []);

  // console.log("isSignedIn:", isSignedIn); // Check if isSignedIn is being updated correctly

  return (
    <>
      
        <div className="app">
          <PodcastList />
          <Footer />
        </div>
   
        <div> 
          <h2>SignIn/SignUp to Listen to Podcasts!!!</h2>
         
        </div>
      
    </>
  );
}