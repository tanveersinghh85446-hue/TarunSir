// Hidden field to catch spam bots. Real visitors never see or fill it.
export default function Honeypot() {
  return (
    <div className="hidden" aria-hidden="true">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
