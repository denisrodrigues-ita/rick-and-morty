import React from "react";
import { CharactersEntity } from "../../interface/ICharactersJSON";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: CharactersEntity;
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, modalContent }) => {
  return (
    <div className="modal">
      <div className="flex flex-col lg:flex-row">
        <div className="backdrop-blur-3xl pb-8 rounded-t-lg lg:rounded-tr-none lg:rounded-s-lg">
          <button onClick={() => setIsModalOpen(false)} className="btn m-4">
            Close
          </button>
          <div className="card lg:-translate-x-12 w-2/3 lg:w-full m-auto">
            <div>
              <img
                src={modalContent.image}
                alt={modalContent.name}
                className="w-full h-full"
              />
            </div>
            <div className="card_info_modal bg-neutral-800">
              <h2>{modalContent.name}</h2>
              <p>{modalContent.species}</p>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-b-lg lg:rounded-tr-lg lg:rounded-bl-none flex flex-col">
          <div className="m-8">
            <h3 className="cardInformation">About</h3>
            <p className="info_modal">{`${modalContent.name} is a ${
              modalContent.gender
            } ${modalContent.species}. ${
              modalContent.gender === "Female" ? "She" : "He"
            } is ${modalContent.status}`}</p>

            <h3 className="cardInformation">Origin</h3>
            <p className="info_modal">{modalContent.origin_name}</p>

            <h3 className="cardInformation">Location</h3>
            <p className="info_modal">{modalContent.location_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
