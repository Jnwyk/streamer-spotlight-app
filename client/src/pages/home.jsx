import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import StremerForm from "../components/StreamerForm/StreamerForm";
import StreamersList from "../components/StreamersList/StreamersList";

const Home = () => {
  const [streamers, setStreamers] = useState();

  useEffect(() => {
    getStreamers();
  }, []);

  const getStreamers = async () => {
    await axios
      .get("http://localhost:3080/streamers")
      .then((res) => setStreamers(res.data.streamers));
  };

  const submitForm = async (form) => {
    await axios.post("http://localhost:3080/streamers", form);
    getStreamers();
  };

  return (
    <div className="home-page">
      <StremerForm submitForm={(streamerForm) => submitForm(streamerForm)} />
      {streamers ? <StreamersList streamers={streamers} /> : ""}
    </div>
  );
};

export default Home;
