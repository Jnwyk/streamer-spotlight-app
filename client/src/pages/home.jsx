import { useEffect, useState } from "react";
import axios from "axios";
import StremerForm from "../components/StreamerForm/StreamerForm";
import StreamersList from "../components/StreamersList/StreamersList";

const Home = () => {
  const [streamers, setStreamers] = useState();
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3080/streamers")
        .then((res) => setStreamers(res.data.streamers));
    };
    fetchData();
  }, [update]);

  const submitForm = async (form) => {
    await axios.post("http://localhost:3080/streamers", form);
    setUpdate(!update);
  };
  return (
    <div className="home-page">
      <StremerForm submitForm={(streamerForm) => submitForm(streamerForm)} />
      {streamers ? <StreamersList streamers={streamers} /> : ""}
    </div>
  );
};

export default Home;
