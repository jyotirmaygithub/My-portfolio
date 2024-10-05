"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./loader";

// EmailJS configuration
const serviceID = "service_3b5kgac";
const templateID = "template_fszeoqh";
const userID = "ww4cWkcf4gfXnGXat";

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
  const [form, setForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successCheck, setSuccessCheck] = useState(false);
  const [error, setError] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    // Validation
    if (!name && !email && !message) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (!name) {
      toast.error("name fields is empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (!email) {
      toast.error("email fields is empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (!message) {
      toast.error("message fields is empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };
    setForm(false);
    setLoading(true);

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setLoading(false);
        console.log("SUCCESS!", response.status, response.text);
        setSuccessCheck(true);

        // Close the modal after showing the tick for 2 seconds
        setTimeout(() => {
          closeModal();
          setSuccessCheck(false); // Reset success state
        }, 1000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setLoading(false);
        toast.error("Failed to send the message. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      });

    setName("");
    setEmail("");
    setMessage("");
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
          {loading && <Loader />}
          {successCheck && (
            <div className="flex w-full h-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="90px"
                viewBox="0 -960 960 960"
                width="90px"
                fill="#53ba10"
              >
                <path d="M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140q145 0 242.5-97.5T820-480q0-30-4.5-58.5T802-594l46-46q16 37 24 77t8 83q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm-59-218L256-464l45-45 120 120 414-414 46 45-460 460Z" />
              </svg>
            </div>
          )}
          {form && (
            <div className="space-y-5">
              <h1 className="font-bold text-3xl">Contact with me</h1>
              <p className="text-sm">
                If you have any questions or concerns, please dont hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests.
              </p>
              <div className="space-y-5">
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
                  startIcon={<EmailIcon />}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Send message
                </Button>
              </div>
            </div>
          )}
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
      <ToastContainer />
    </>
  );
};

export default ContactModal;
