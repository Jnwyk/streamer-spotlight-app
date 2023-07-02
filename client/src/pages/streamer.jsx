import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import StreamerCard from "../components/StreamerCard/StreamerCard";

const Streamer = () => {
  const [streamer, setStreamer] = useState();
  const { streamerId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3080/streamers/${streamerId}`)
        .then((res) => setStreamer(res.data.streamer))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, [streamerId]);

  return streamer ? <StreamerCard streamer={streamer} /> : "";
};

export default Streamer;
