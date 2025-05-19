import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee ,coffees,setCoffees}) => {
  const { _id, photo, name, price, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:199/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(cof => cof._id !== _id)
              setCoffees(remainingCoffee)
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border flex justify-between items-start p-2">
      <div className="flex flex-col mt-10">
        <h2 className="">Coffee name: {name}</h2>
        <p>Coffee Price: {price}</p>
        <p>Quanity: {quantity}</p>
      </div>
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex flex-col items-end gap-2 justify-end mt-10">
        <Link to={`/coffee/${_id}`}>
          <button className="btn btn-primary w-20">View</button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-primary w-20">Edit</button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary w-20"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
