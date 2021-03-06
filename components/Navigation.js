import React from 'react';
import PropTypes from 'prop-types';

import {Button, StyleSheet, View} from 'react-native';
import styles from "../style";

// import './Navigation.css';

const Navigation = ({week, day, triggerNavigation, showModal}) => {
    const handleNext = () => {
        triggerNavigation(1);
        return false;
    };

    const handlePrevious = () => {
        triggerNavigation(-1);
        return false;
    };

    function _prevText() {
        var weekTxt = (day === 1 ? week - 1 : week);
        var dayTxt = (day === 1 ? 3 : day - 1);
        return "‹‹ Week "+ weekTxt + ", Day " + dayTxt;
    }

    function _nextText() {
        var weekTxt = (day === 3 ? week + 1 : week);
        var dayTxt = (day === 3 ? 1 : day + 1);
        return "Week "+ weekTxt + ", Day " + dayTxt + " ››";
    }

    return (
        <View style={styles.navigationButtons}>
            {!(week === 1 && day === 1) && (
                <View style={styles.navigationButton}>
                    <Button title={_prevText()} onPress={handlePrevious} />
                </View>
            )}
            <View style={styles.navigationButton}>
                <Button title="..." color="darkgray" onPress={showModal} />
            </View>
            {!(week === 9 && day === 3) && (
                <View style={styles.navigationButton}>
                    <Button title={_nextText()} onPress={handleNext} />
                </View>
            )}
        </View>
    );
};

Navigation.propTypes = {
    week: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    triggerNavigation: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
};

export default Navigation;
