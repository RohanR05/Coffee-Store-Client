import React, { use } from "react";
import { AuthContext } from "../Auth/AuthContext";

const SignUp = () => {

    const userInfo = use(AuthContext)
    console.log(userInfo)

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignUP now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email"/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password"/>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
