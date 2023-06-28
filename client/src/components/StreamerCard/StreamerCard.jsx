import Card from "../Card/Card";
import "./styles.css";

const StreamerCard = ({ streamer }) => {
  const likeCounter = streamer.Vote.like - streamer.Vote.dislike;

  return (
    <Card className="streamer-card">
      <h2 className="streamer-card__name">{streamer.name}</h2>
      <h4 className="streamer-card__platform">{streamer.streamingPlatform}</h4>
      <img
        className="streamer-card__image"
        src="https://dziendobry.tvn.pl/najnowsze/cdn-zdjecie-fs6iq6-fretka-5447944/alternates/SQUARE_1280"
        alt={streamer.name}
      />
      <p className="streamer-card__description">{streamer.description}</p>
      <p
        className={`streamer-card__like-counter ${
          likeCounter >= 0
            ? `streamer-card__like-counter_positive`
            : "streamer-card__like-counter_negative"
        }`}
      >
        {likeCounter}
      </p>
    </Card>
  );
};

export default StreamerCard;
