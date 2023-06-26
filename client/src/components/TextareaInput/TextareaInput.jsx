const TextareaInput = ({ label, onChange, id }) => {
  return (
    <label className="textarea-input">
      {label}
      <textarea
        className="textarea-input__input"
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default TextareaInput;
