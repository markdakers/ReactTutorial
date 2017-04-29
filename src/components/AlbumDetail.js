import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
};

//React.PropTypes.arrayOf
AlbumDetail.propTypes = { album: PropTypes.shape({
    title: PropTypes.string.isRequired }).isRequired,
};

export default AlbumDetail;
