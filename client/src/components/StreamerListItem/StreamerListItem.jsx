// import "./styles.css";

const StreamersListItem = ({ streamer }) => {
  return (
    <div className="streamer-list-item">
      <h2 className="streamer-list-item__name">{streamer.name}</h2>
      <p className="streamer-list-item__vote-number">{streamer.Vote.like}</p>
      <p className="streamer-list-item__vote-number">{streamer.Vote.dislike}</p>
    </div>
  );
};

export default StreamersListItem;
