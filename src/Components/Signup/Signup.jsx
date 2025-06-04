import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const Signup = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setErrorMassage(error.massage);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto mt-12 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Sign Up now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        {/* {errorMassage && <p className="text-red-500">{errorMassage}</p>} */}
      </div>
    </div>
  );
};

export default Signup;
