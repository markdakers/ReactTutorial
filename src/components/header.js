// Snippets => nfn , imd
// Import libraries
import React from 'react';
import { Text, View, Platform } from 'react-native';

const styles = {
    textStyle: {
        fontSize: 50,
    },
    viewStyle: {
        backgroundColor: '#F8F8E8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingBottom: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: (Platform.OS === 'android') ? 3 : 0,   //shadow doesn't work on android
        position: 'relative',
    },
};



// Make component
const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};
// const Header2 = () => <Text>Albums!</Text>;

// Make components available to other parts of the app
export default Header;
// export { Header, Header2 };

