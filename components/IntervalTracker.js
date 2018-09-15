import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View} from 'react-native';

// import './IntervalTracker.css';

const IntervalTracker = ({current, total}) => {
    const displayCurrent = current > total ? current - 1 : current;

    return (
        <View>
            <Text className="current-interval">{displayCurrent}</Text>
            <Text>/</Text>
            <Text className="total-interval">{total}</Text>
        </View>
    );
};

IntervalTracker.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default IntervalTracker;
