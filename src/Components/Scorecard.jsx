import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Scorecard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        View Scorecard
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-gray-800 p-6 rounded-md shadow-lg max-w-md mx-auto"
        overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-purple-500">Your Scorecard</h2>
        <p className="mt-4">Score: 120</p>
        <div className="flex gap-2 mt-4">
          <button className="bg-green-500 text-white px-3 py-2 rounded-md">
            Copy Link
          </button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Share on Twitter
          </button>
          <button className="bg-gray-700 text-white px-3 py-2 rounded-md">
            Download
          </button>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white px-3 py-2 rounded-md"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Scorecard;
