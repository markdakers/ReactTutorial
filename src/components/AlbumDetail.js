import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.albumImageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy Now</Text>
                </Button>
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
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default AlbumDetail;
