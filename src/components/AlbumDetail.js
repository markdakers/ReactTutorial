import React from 'react';
import { Text, View } from 'react-native';
//import PropTypes from 'prop-types';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

//AlbumDetail.propTypes = { album: PropTypes.album.required };

export default AlbumDetail;
