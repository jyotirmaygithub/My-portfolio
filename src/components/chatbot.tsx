"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./loader";

const serviceID = "service_3b5kgac";
const templateID = "template_fszeoqh";
const userID = "ww4cWkcf4gfXnGXat";

const customStyles = {
  content: {
    background: "#10161f",
    color: "#eef3f8",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid rgba(238, 243, 248, 0.12)",
    maxWidth: "480px",
    width: "92%",
    margin: "auto",
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(5, 8, 12, 0.72)",
    zIndex: 60,
  },
};

const ContactModal: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successCheck, setSuccessCheck] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setForm(true);
    setSuccessCheck(false);
  };
  const closeModal = () => setModalIsOpen(false);

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", { position: "top-center", autoClose: 3000 });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setForm(false);
    setLoading(true);

    emailjs
      .send(
        serviceID,
        templateID,
        { from_name: name, from_email: email, message },
        userID
      )
      .then(() => {
        setLoading(false);
        setSuccessCheck(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          closeModal();
          setSuccessCheck(false);
          setForm(true);
        }, 1200);
      })
      .catch(() => {
        setLoading(false);
        setForm(true);
        toast.error("Failed to send the message. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
        ariaHideApp={false}
      >
        {loading && <Loader />}
        {successCheck && (
          <div className="flex h-40 items-center justify-center text-accent">
            <p className="display text-2xl font-semibold">Message sent.</p>
          </div>
        )}
        {form && !loading && (
          <div className="space-y-4">
            <h2 className="display text-3xl font-bold">Let&apos;s talk</h2>
            <p className="text-sm text-[var(--muted)]">
              Open to backend, platform, and full-stack roles that need reliable production systems.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-[var(--line)] bg-[#0a1017] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-accent"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-xl border border-[var(--line)] bg-[#0a1017] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-accent"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="min-h-28 w-full rounded-xl border border-[var(--line)] bg-[#0a1017] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-accent"
            />
            <button type="button" onClick={handleSubmit} className="btn-primary w-full">
              Send message
            </button>
          </div>
        )}
      </Modal>

      <button
        type="button"
        onClick={openModal}
        className="btn-primary fixed bottom-5 right-5 z-50 shadow-lg"
        aria-label="Open contact form"
      >
        Contact
      </button>
      <ToastContainer />
    </>
  );
};

export default ContactModal;
