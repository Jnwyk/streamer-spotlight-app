import "./styles.css";

const TextInput = ({ label, onChange, id, value }) => {
  return (
    <label className="text-input">
      {label}
      <input
        className="text-input__input"
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </label>
  );
};

export default TextInput;
