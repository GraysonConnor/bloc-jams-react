import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/album';
import '.././styles/Library.css';




class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
   render() {
    return (
      <section className='library'>
      {
       this.state.albums.map( (album, index) =>
          <Link to={`/album/${album.slug}`} key={index}>
             <img id="album-cover" src={album.albumCover} alt={album.title} />
             <div id="album-info">
             <div id="title">{album.title}</div>
             <div id="artist">{album.artist}</div>
             <div id="songs">{album.songs.length} songs</div>
             </div>
          </Link>
       )
     }
      </section>
     );
   }
 }

export default Library;
