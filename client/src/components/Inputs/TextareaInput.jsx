import "./styles.css";

const TextareaInput = ({ label, onChange, id, value }) => {
  return (
    <label className="textarea-input">
      {label}
      <textarea
        className="textarea-input__input"
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </label>
  );
};

export default TextareaInput;
