// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase"
// import React, { useState } from "react";
// import "./SignupScreen.css";

// const SignupScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//     const signUp = (e) => {
//         e.preventDefault();

//         createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
//             console.log(userCredential);
//         }).catch((error) => {
//             console.log(error)
//         })
//     }

//   return (
//     <div className="signupScreen">
//       <form onSubmit={signUp}>
//         <h1>Create Account</h1>
//         <input type="email" placeholder="Enter your email" value={email} onChange = {(e) => setEmail(e.target.value)} />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password} onChange = {(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupScreen;









import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";

import { auth } from "./firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    }).catch((error) => {
        alert(error.message)
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value).then((authUser) => {
      console.log(authUser);
    }).catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="Password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray"> New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
