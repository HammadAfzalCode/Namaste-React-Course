import React, { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic

    // Show the pop-up
    setIsSubmitted(true);

    // Reset input fields
    setFormData({
      name: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-4">
        <span
          style={{
            background: "linear-gradient(to right, #f00, #f00, #600)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Contact Us Page
        </span>
      </h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-lg font-semibold mr-2 text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-black p-2 rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-lg font-semibold mr-2 text-white"
          >
            Message:
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-black p-2 rounded-lg w-[400px] h-[150px]"
            placeholder="Enter your message"
          />
        </div>
        <button className="border border-black p-2 bg-gray-100 rounded-lg font-bold">
          Submit
        </button>
      </form>

      {/* Pop-up */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-lg font-bold">Thanks for contacting us!</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
