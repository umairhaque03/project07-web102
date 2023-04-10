import React from 'react';
import { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const avengerImages = {
  'Iron Man': 'https://ironusa.vtexassets.com/arquivos/ids/196906/090214_0.jpg?v=637913412188030000',
  'Captain America': 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
  'Thor': 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2019/07/thor-ragnarok2.jpg',
  'Hulk': 'https://www.pinkvilla.com/imageresize/AvengersHulk.jpg?width=752&t=pvorg',
  'Black Widow': 'https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg',
  'Hawkeye': 'https://images.immediate.co.uk/production/volatile/sites/3/2019/07/avengers-8bb66cd.jpg?quality=90&resize=727,485',
  'Spider-Man': 'https://cdn.marvel.com/content/1x/maguiregarfieldholland_opt.jpg',
  'Doctor Strange': 'https://www.cnet.com/a/img/resize/ee6abd26861d2a4eaba6d4586f1baca489f075f2/hub/2016/10/24/4c7b8f36-6f0e-427b-9884-59e1f7209591/strange1.jpg?auto=webp&width=1200',
  'Black Panther': 'https://image.cnbcfm.com/api/v1/image/102129219-544fe3109623b.jpg?v=1497046818&w=1920&h=1080',
  'Captain Marvel': 'https://cdn.marvel.com/content/1x/captainmarvel_lob_mas_mob_03_0.jpg',
};

const Card = (props) => {
  const [count, setCount] = useState(props.betCount);

  // UPDATE
  const updateCount = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('Posts')
      .update({ betCount: count + 1 })
      .eq('id', props.id);

    // Error Handling
    if (error) {
      console.log(error);
    } else {
      setCount((count) => count + 1);
    }
  };

  const avengerName = props.description;
  const avengerImage = avengerImages[avengerName];

  return (
    <div className="Card">
      <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{"Strength: " + props.author + " Pascals(PA)"}</h3>
      <h4 className="description">{"Avenger: " + props.description}</h4>
      <img
  src={avengerImage}
  alt={avengerName}
  className="AvengerImage"
/>
    </div>
  );
};

export default Card;
