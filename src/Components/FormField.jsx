const inputClass =
  "w-full rounded border border-gray-300 bg-white px-3 py-2 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

// One form field with a label. Pass `options` for a dropdown, `rows` for a textarea.
export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  options,
  rows,
}) {
  let control;

  if (options) {
    control = (
      <select
        name={name}
        required={required}
        defaultValue=""
        className={inputClass}
      >
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
    control = (
      <textarea
        name={name}
        rows={rows}
        required={required}
        className={inputClass}
      />
    );
  } else {
    control = (
      <input
        type={type}
        name={name}
        required={required}
        className={inputClass}
      />
    );
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
