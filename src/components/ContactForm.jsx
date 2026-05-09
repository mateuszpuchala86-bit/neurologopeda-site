"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href =
      `mailto:kpneurologopeda@gmail.com?subject=Kontakt&body=` +
      encodeURIComponent(
        `Imię: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Imię i nazwisko"
        className="w-full border p-3 rounded-xl"
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-xl"
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Wiadomość"
        className="w-full border p-3 rounded-xl h-32"
        onChange={handleChange}
      />

      <button className="w-full bg-black text-white py-3 rounded-xl">
        Wyślij
      </button>

    </form>
  );
}