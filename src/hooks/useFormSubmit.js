import { useState } from "react";

// Sends a form to /api/send-mail.
// formType is "apply", "contact" or "franchise".
export default function useFormSubmit(formType) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = Object.fromEntries(new FormData(e.target));

      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...data }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err) {
      // "TypeError" means the request never reached the server
      setError(
        err instanceof TypeError
          ? "Could not connect. Please check your internet and try again."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return { sent, setSent, loading, error, handleSubmit };
}
