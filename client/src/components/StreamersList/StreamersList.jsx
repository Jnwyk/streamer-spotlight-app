import StreamersListItem from "../StreamerListItem/StreamerListItem";

const StreamersList = ({ streamers }) => {
  return (
    <div className="streamer-list">
      {streamers.map((streamer) => (
        <StreamersListItem
          key={streamer.name + streamer.id}
          streamer={streamer}
        />
      ))}
    </div>
  );
};

export default StreamersList;
