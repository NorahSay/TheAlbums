import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  //Step 1 : Setting initial state
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => {
        //Step2: Updating albums
        this.setState({ albums: responseData });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
