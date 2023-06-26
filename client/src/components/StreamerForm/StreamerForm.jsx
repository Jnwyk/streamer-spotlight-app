import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import DropdownInput from "../DropdownInput/DropdownInput";
import { useState } from "react";

const StremerForm = ({ submitForm }) => {
  const [streamerForm, setStreamerForm] = useState({
    name: "",
    platform: "",
    description: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm(streamerForm);
    setStreamerForm({
      name: "",
      platform: "",
      description: "",
    });
  };

  const handleOnChange = (key, value) => {
    setStreamerForm({ ...streamerForm, [key]: value });
  };

  return (
    <form>
      <TextInput
        label="Streamer name"
        onChange={(input) => handleOnChange("name", input)}
      />
      <DropdownInput
        label="Platform"
        onChange={(input) => handleOnChange("platform", input)}
      />
      <TextareaInput
        label="Description"
        onChange={(input) => handleOnChange("description", input)}
      />
      <Button type="submit" onClick={(e) => handleSubmitForm(e)}>
        Submit
      </Button>
    </form>
  );
};

export default StremerForm;
