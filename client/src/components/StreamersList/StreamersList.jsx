import StreamersListItem from "../StreamerListItem/StreamerListItem";

const StreamersList = ({ streamers }) => {
  return (
    <>
      {streamers.map((streamer) => (
        <StreamersListItem
          key={streamer.name + streamer.id}
          streamer={streamer}
        />
      ))}
    </>
  );
};

export default StreamersList;
