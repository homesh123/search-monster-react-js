import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {
    return(
        <div className="card-list">
          {props.arts.map( art => (
          <Card key={art.id} art={art} />
           ) )}
        </div>
    )
}