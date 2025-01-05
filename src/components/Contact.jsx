import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us</h1>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <button className="rounded-lg bg-black text-white p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
