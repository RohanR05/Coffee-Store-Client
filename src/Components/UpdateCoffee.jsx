import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, photo, name, price, quantity, teste, supplier, details } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    fetch(`http://localhost:199/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-5">
        <div className="text-6xl">Add Coffee</div>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Coffee Name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              name="quantity"
              placeholder="Coffee Quantity"
              defaultValue={quantity}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              placeholder="Coffee Supplier"
              defaultValue={supplier}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Teste</label>
            <input
              type="text"
              className="input w-full"
              name="teste"
              placeholder="Coffee Teste"
              defaultValue={teste}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              placeholder="Coffee Price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Coffee Details"
              defaultValue={details}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-5 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
              defaultValue={photo}
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="Update Coffee" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
