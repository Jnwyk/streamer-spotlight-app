import "./styles.css";
import StreamersListItem from "./StreamerListItem/StreamerListItem";

const StreamersList = ({ streamers, pressLikeDislike }) => {
  return (
    <div className="streamer-list">
      {streamers.map((streamer) => (
        <StreamersListItem
          key={streamer.name + streamer.id}
          streamer={streamer}
          pressLikeDislike={(value) => pressLikeDislike(streamer, value)}
        />
      ))}
    </div>
  );
};

export default StreamersList;
