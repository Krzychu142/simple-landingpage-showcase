import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiBackRight } from "react-icons/tfi";
import "./styles/Contact.css";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

export default function Contact() {
  const size = useWindowSize();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d17se3e",
        "template_u1nz6as",
        form.current,
        "KjA3O5xf3T8e3W4J5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact--container">
      <Link to="/">
        <TfiBackRight
          className="contact--link"
          size={size.width >= 480 ? 40 : 30}
        />
      </Link>
      <form ref={form} className="contact--form" onSubmit={sendEmail}>
        <input
          className="contact--input"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="contact--input"
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          className="contact--input"
          type="text"
          placeholder="subject"
          name="subject"
        />
        <textarea
          className="contact--input"
          id="textarea"
          type="text"
          placeholder="message"
          name="message"
        />
        <button className="contact--button" type="submit">
          send email
        </button>
      </form>
    </div>
  );
}
