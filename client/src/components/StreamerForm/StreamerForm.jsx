import "./styles.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import TextInput from "../Inputs/TextInput";
import TextareaInput from "../Inputs/TextareaInput";
import DropdownInput from "../Inputs/DropdownInput";
import { useState } from "react";

const StremerForm = ({ submitForm }) => {
  const [streamerForm, setStreamerForm] = useState({
    name: "",
    streamingPlatform: "",
    description: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm(streamerForm);
    setStreamerForm({
      name: "",
      streamingPlatform: "",
      description: "",
    });
  };

  const handleOnChange = (key, value) => {
    setStreamerForm({ ...streamerForm, [key]: value });
  };

  const isFormEmpty = () => {
    if (
      streamerForm.name === "" ||
      streamerForm.streamingPlatform === "" ||
      streamerForm.description === ""
    )
      return true;
    return false;
  };

  return (
    <Card className="streamer-form">
      <TextInput
        label="Streamer name"
        onChange={(input) => handleOnChange("name", input)}
        value={streamerForm.name}
      />
      <DropdownInput
        label="Platform"
        onChange={(input) => handleOnChange("streamingPlatform", input)}
      />
      <TextareaInput
        label="Description"
        onChange={(input) => handleOnChange("description", input)}
        value={streamerForm.description}
      />
      <Button
        type="submit"
        disabled={isFormEmpty() ? true : false}
        onClick={(e) => handleSubmitForm(e)}
      >
        Submit
      </Button>
    </Card>
  );
};

export default StremerForm;
