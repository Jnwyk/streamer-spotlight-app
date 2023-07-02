import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import StreamerCard from "../components/StreamerCard/StreamerCard";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const Streamer = () => {
  const [streamer, setStreamer] = useState();
  const [error, setError] = useState(false);
  const { streamerId } = useParams();

  useEffect(() => {
    setError(false);
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3080/streamers/${streamerId}`)
        .then((res) => setStreamer(res.data.streamer))
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    };
    fetchData();
  }, [streamerId]);

  if (error) return <ErrorPage />;
  return streamer ? <StreamerCard streamer={streamer} /> : "";
};

export default Streamer;
