import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class AlbumList extends Component {
    componentWillMount() {
        console.log('componentWillMount invoked');
        // debugger;
    }

    render() {
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }

}

export default AlbumList;
