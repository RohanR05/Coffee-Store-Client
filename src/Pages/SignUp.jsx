import React, { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(email, password, userProfile);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        fetch("http://localhost:199/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile save", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Account is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignUP now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="name" name="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            placeholder="Address"
            name="address"
          />
          <label className="label">Phone</label>
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            name="phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            placeholder="Photo URL"
            name="photo"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
