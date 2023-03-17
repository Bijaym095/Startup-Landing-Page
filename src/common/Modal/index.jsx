import { FaTimes } from "react-icons/fa";

import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
          aria-hidden="true"
        >
          <Dialog.Panel className="p-4">
            {children}

            <button
              className="absolute top-8 right-8 text-2xl text-white"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
