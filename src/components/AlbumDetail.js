import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
};

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

// React.PropTypes.arrayOf
AlbumDetail.propTypes = {
    album: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        thumbnail_image: PropTypes.string.isRequired,
    }).isRequired,
};

export default AlbumDetail;
