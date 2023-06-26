const DropdownInput = ({ label, placeholder, id, onChange }) => {
  const platforms = ["twitch", "youtube", "tiktok", "kick", "rumble"];

  return (
    <label className="dropdown-input">
      {label}
      <select
        className="dropdown-input__input"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className="dropdown-input__option" defaultValue hidden>
          Pick platform
        </option>
        {platforms.map((platform) => (
          <option
            className="dropdown-input__option"
            key={platform}
            value={platform}
          >
            {platform}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropdownInput;
