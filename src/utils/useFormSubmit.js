import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../data/contact";

// Set VITE_FORM_ENDPOINT (for example a Formspree URL) to receive form data
// directly in your inbox. See .env.example.
// If it is not set, the form opens the visitor's email app with the details filled in.
const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

export default function useFormSubmit(subject) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mail | error
  const [notice, setNotice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (endpoint) {
      setStatus("sending");
      setNotice("");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ _subject: `ANITIO - ${subject}`, ...data }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
      } catch {
        setStatus("error");
        setNotice(
          `Sorry, we could not send your details. Please try again or call us on ${CONTACT_PHONE}.`
        );
      }
      return;
    }

    // Fallback: open the email app with the details filled in
    const body = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `ANITIO - ${subject}`
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mail");
    setNotice(
      `Your email app has opened with your details. Please press Send there to complete. You can also call us on ${CONTACT_PHONE}.`
    );
  }

  function reset() {
    setStatus("idle");
    setNotice("");
  }

  return { status, notice, handleSubmit, reset };
}
