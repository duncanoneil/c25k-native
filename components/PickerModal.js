import React from 'react';
import PropTypes from 'prop-types';

import {Button, StyleSheet, Text, View} from 'react-native';
import styles from "../style";

// import './PickerModal.css';

const PickerModal = ({segments, currentSegment, hideModal, updateSegment}) => {
    function _pickerText(week, day) {
        return "Week " + week + ", Day " + day;
    }

    return (
        <View style={styles.picker}>
            <View style={styles.pickerHeader}>
                <Text style={styles.pickerHeaderText}>Pick a Day</Text>
                <View style={styles.pickerHeaderClose}>
                    <Button title="x" color="darkgray" onPress={hideModal} />
                </View>
            </View>

                <View style={styles.pickerButtons}>
                    {segments.map((segment, index) => (
                        <View style={styles.pickerButton} key={index}>
                            <Button
                                title={_pickerText(segment.week, segment.day)}
                                className="picker-Button"
                                onPress={() => updateSegment(index - currentSegment)}
                            />
                        </View>
                    ))}
                </View>

        </View>
    );
}

PickerModal.propTypes = {
    segments: PropTypes.array.isRequired,
    currentSegment: PropTypes.number.isRequired,
    hideModal: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired
};

export default PickerModal;
