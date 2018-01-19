import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        shadowColor: '#111111',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
