import { ListItem } from '../types';

type CardProps = {
  item: ListItem;
  style?: React.CSSProperties; // Optional inline style for flexibility
};

function Card({ item, style }: CardProps) {
  return (
    <div className="card" style={style}>
      <img
        src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '/placeholder.png'}
        alt={item.title || item.name || 'No Title'}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>
        <p className="card-overview">{item.overview}</p>
      </div>
    </div>
  );
}

export default Card;
