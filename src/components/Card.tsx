import React from 'react';
import Thumb from './Thumb';
type CardProps = {
  id?: number;
  name?: string;
  title?: string;
  body?: string;
  mail?: string;
  url?: string;
}

const Card: React.FC<CardProps> = ({ id, name, title, body, mail, url }) => {
  return (
    <div className={`card id-card-${id}`}>
      {url && <Thumb src={url} alt={name} aspect="landscape" />}
      {name && <h2>{name}</h2>}
      {title && <h2> {title}</h2>}
      {body && <p>{body}</p>}
      {mail && <p>Mail: {mail}</p>}
    </div>
  );
}

export default Card;