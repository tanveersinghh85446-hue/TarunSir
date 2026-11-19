const inputClass =
  "w-full rounded border border-gray-300 bg-white px-3 py-2 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

// Extra rules for some input types
const rules = {
  tel: {
    attrs: { pattern: "[6-9][0-9]{9}", maxLength: 10, inputMode: "numeric" },
    message: "Enter a valid 10 digit mobile number",
  },
  email: {
    attrs: { pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+" },
    message: "Enter a valid email address",
  },
  text: {
    attrs: { minLength: 2 },
    message: "Please enter at least 2 characters",
  },
};

// One form field with a label. Pass `options` for a dropdown, `rows` for a textarea.
export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  options,
  rows,
}) {
  const rule = rules[type];

  // Phone fields accept digits only. Clear the old error message while typing.
  const handleInput = (e) => {
    if (type === "tel") e.target.value = e.target.value.replace(/\D/g, "");
    e.target.setCustomValidity("");
  };

  // Show simple, friendly error messages
  const handleInvalid = (e) => {
    const input = e.target;
    const { valueMissing, patternMismatch, typeMismatch, tooShort } =
      input.validity;

    if (valueMissing) {
      input.setCustomValidity(
        `${options ? "Please select" : "Please enter"} ${label.toLowerCase()}`
      );
    } else if ((patternMismatch || typeMismatch || tooShort) && rule) {
      input.setCustomValidity(rule.message);
    }
  };

  const common = {
    name,
    required,
    onInput: handleInput,
    onInvalid: handleInvalid,
    className: inputClass,
  };

  let control;

  if (options) {
    control = (
      <select {...common} defaultValue="">
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else if (rows) {
    control = <textarea {...common} rows={rows} />;
  } else {
    control = <input {...common} type={type} {...rule?.attrs} />;
  }

  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {control}
    </label>
  );
}
