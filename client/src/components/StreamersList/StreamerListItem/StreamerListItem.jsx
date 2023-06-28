import "./styles.css";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const StreamersListItem = ({ streamer, pressLikeDislike }) => {
  return (
    <Card className="streamer-list-item">
      <Link className="streamer-list-item__name" to={`/${streamer.id}`}>
        {streamer.name}
      </Link>
      <div className="streamer-list__vote-container">
        <p
          onClick={() => pressLikeDislike(1)}
          className="streamer-list-item__vote-number streamer-list-item__vote-number_likes"
        >
          {streamer.Vote.like}
        </p>
        <p
          onClick={() => pressLikeDislike(-1)}
          className="streamer-list-item__vote-number streamer-list-item__vote-number_dislikes"
        >
          {streamer.Vote.dislike}
        </p>
      </div>
    </Card>
  );
};

export default StreamersListItem;
