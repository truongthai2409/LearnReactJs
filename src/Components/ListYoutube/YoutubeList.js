import React from 'react';
import { YoutubeData } from '../../YoutubeData';
import YoutubeItem from './YoutubeItem';


const YoutubeList = () => {
    return (
        <div className="youtube-list"> 
        {
          YoutubeData.map(item => (
            <YoutubeItem
              key = {item.id}
              image = {item.image}
              img = {item.img}
              title = {item.title}
              author = {item.author}
            />
          ))
        }
    </div>
    );
};

export default YoutubeList;