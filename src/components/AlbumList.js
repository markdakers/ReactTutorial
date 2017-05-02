import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = {albums:[]}
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })) 
            .then(response => console.log('callback'));          
        // debugger;
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
