import React from 'react';
import Thumb from './Thumb';
import './Card.scss';

type CardProps = {
  type: string;
  id?: number;
  name?: string;
  title?: string;
  body?: string;
  mail?: string;
  url?: string;
}

export const Card = ({ id , name , type , title , body , mail , url  }: CardProps) => {
   id = Math.floor(Math.random() * 1000);
  return (
    <div className={`card card-${type} id-card-${id}`}>
      {url && <Thumb src={url} alt={name} aspect="landscape" />}
      {name && <h2 className='card-name'>{name}</h2>}
      {title && <h2 className='card-title'> {title}</h2>}
      {body && <p className='card-paragraph'>{body}</p>}
      {mail && <p className='card-email'>Mail: {mail}</p>}
    </div>
  );
}

