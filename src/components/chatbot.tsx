"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Button from "./button";
import EmailIcon from "@mui/icons-material/Email";

const customStyles = {
  content: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    border: "1px solid white",
    maxWidth: "500px",
    margin: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ContactModal: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle message submission (e.g., send it to an API or email)
    console.log("Message sent:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    closeModal();
  };

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Contact Modal"
        >
          <div className="space-y-5">
            <h1 className="font-bold text-3xl">Contact with me</h1>
            <p className="text-sm">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              style={{
                width: "100%",
                height: "100px",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            />
            <Button
              title="Send message"
              icon={<EmailIcon />}
              position="start"
              href=""
            />
          </form>
          </div>
        </Modal>
      </div>
      <div>
        <Fab
          color="primary"
          aria-label="chat"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
          onClick={openModal}
        >
          <ChatIcon />
        </Fab>
      </div>
    </>
  );
};

export default ContactModal;
