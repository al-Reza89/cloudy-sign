import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const AddUserSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (event: any) => {
    setNewUserName(event.target.value);
  };

  const handleAddUser = (event: any) => {
    event.preventDefault();

    console.log("New user added:", newUserName);
    setNewUserName("");
    handleCloseModal();
  };

  const handleModalContentClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div className="bg-[#1b0b0b] text-[#ee5316] rounded-[5px] ">
      <button
        className="flex gap-1 pr-2 items-center px-1 py-[.35rem]"
        onClick={handleAddUserClick}
      >
        <IoPersonSharp />
        <p>Add User</p>
      </button>

      {showModal && (
        <div
          className=" bg-transparent/40 fixed top-0 left-0   w-full h-full z-10 backdrop"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#bebcbc] fixed top-10 left-1/2 transform -translate-x-1/2 rounded-[10px] shadow-lg p-4  px-10"
            style={{ transition: "opacity 0.2s ease-in-out" }}
            onClick={handleModalContentClick}
          >
            <div className="text-lg font-bold mb-4   text-[#42403f] flex justify-between ">
              <h1>Add User</h1>
              <button onClick={handleCloseModal}>
                <MdCancel />
              </button>
            </div>
            <hr className="h-px mb-3 bg-black border-0 " />
            <div className="pt-4 ">
              <form
                onSubmit={handleAddUser}
                className="flex flex-col text-[#2e2c2c] items-center gap-3"
              >
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Role
                  </label>
                  <select className=" p-2 border rounded mb-2 w-64 required">
                    <option selected>Choose a Role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="newUserName"
                    name="newUserName"
                    value={newUserName}
                    onChange={handleInputChange}
                    className="  p-2 border rounded  mb-2 w-64"
                  />
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Username
                  </label>
                  <input
                    type="text"
                    id="newUserName"
                    name="newUserName"
                    value={newUserName}
                    onChange={handleInputChange}
                    className="  p-2 border rounded mb-2 w-64"
                  />
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="newUserName"
                    name="newUserName"
                    value={newUserName}
                    onChange={handleInputChange}
                    className="  p-2 border rounded mb-2 w-64"
                  />
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Password
                  </label>
                  <input
                    type="text"
                    id="newUserName"
                    name="newUserName"
                    value={newUserName}
                    onChange={handleInputChange}
                    className="  p-2 border rounded mb-2 w-64"
                  />
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <label htmlFor="newUserName" className="w-40 text-end ">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="newUserName"
                    name="newUserName"
                    value={newUserName}
                    onChange={handleInputChange}
                    className="  p-2 border rounded mb-2 w-64"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#57394d]  text-yellow-400 font-bold rounded px-4 py-2"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserSection;
