import { useEffect, useState } from "react";
import axios from "axios";
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
      .then((res) => setStreamers(res.data.streamers))
      .catch((error) => console.error(error));
  };

  const submitForm = async (form) => {
    await axios
      .post("http://localhost:3080/streamers", form)
      .catch((error) => console.error(error));
    getStreamers();
  };

  const pressLikeDislike = async (streamer, value) => {
    if (value === 1) {
      await axios
        .put(`http://localhost:3080/streamers/${streamer.id}/vote`, {
          like: streamer.Vote.like + 1,
        })
        .catch((error) => console.error(error));
    } else {
      await axios
        .put(`http://localhost:3080/streamers/${streamer.id}/vote`, {
          dislike: streamer.Vote.dislike + 1,
        })
        .catch((error) => console.error(error));
    }
    getStreamers();
  };

  return (
    <div className="home-page">
      <StremerForm submitForm={(streamerForm) => submitForm(streamerForm)} />
      {streamers ? (
        <StreamersList
          streamers={streamers}
          pressLikeDislike={(streamer, value) =>
            pressLikeDislike(streamer, value)
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
