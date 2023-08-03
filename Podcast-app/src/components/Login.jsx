// import supabase from "../config/SupabaseClient";
// import { useState, useEffect } from "react";
// import LandingPage from "./LandingPage";

// const Login = () => {
//   const [error, setError] = useState(null);
//   const [logIn, setLogIn] = useState(null);

//   useEffect(() => {
//     const fetchLogin = async () => {
//       const { data, error } = await supabase.from("Login").select();

//       if (error) {
//         setError("could not fetch the login");
//         setLogIn(null);
//         console.log('Error fetching data', error);
//       }
//       if (data) {
//         setLogIn(data);
//         setError(null);
//       }
//     };
//     fetchLogin();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center">Login</h1>
//       {error && <p>{error}</p>}
//       {logIn && (
//         <div className="Login">
//           <div>
//             {logIn.map((login) => (
//               <LandingPage key={login.id} login={login} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
