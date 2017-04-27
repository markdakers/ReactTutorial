// Index.android.js - place code in here for Android!!

// Import a library to help create a component. Curly braces target a specific property on the exported class / function.
// See C:\Development\UdemyReactNative\albums\node_modules\react-native\Libraries\react-native\react-native-implementation.js for ReactNative export
import React from 'react';
// import ReactNative from 'react-native'; - import [ExportName] from '[modulefilename]'
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a component - must return a single top level tag
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device. This is the ROOT component. Only one root component can be registered.
AppRegistry.registerComponent('albums', () => App);

// http://rallycoding.herokuapp.com/api/music_albums
