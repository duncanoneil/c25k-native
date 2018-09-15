import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View} from 'react-native';
import styles from "../style";

// import './IntervalTracker.css';

const IntervalTracker = ({current, total}) => {
    const displayCurrent = current > total ? current - 1 : current;

    return (
        <View style={styles.intervalTracker}>
            <Text style={styles.intervalTrackerText}>{displayCurrent}</Text>
            <Text style={styles.intervalTrackerText}>/</Text>
            <Text style={styles.intervalTrackerText}>{total}</Text>
        </View>
    );
};

IntervalTracker.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default IntervalTracker;
