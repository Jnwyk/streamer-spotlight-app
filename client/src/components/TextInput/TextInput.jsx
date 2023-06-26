const TextInput = ({ label, onChange, id }) => {
  return (
    <label className="text-input">
      {label}
      <input
        className="text-input__input"
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default TextInput;
