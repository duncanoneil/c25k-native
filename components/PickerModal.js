import React from 'react';
import PropTypes from 'prop-types';

import {Button, StyleSheet, Text, View} from 'react-native';

// import './PickerModal.css';

const PickerModal = ({segments, currentSegment, hideModal, updateSegment}) => {
    function _pickerText(week, day) {
        return "Week " + week + ", Day " + day;
    }

    return (
        <View>
            <View className="overlay"/>
            <View className="modal-container">
                <View className="modal">
                    <View className="modal-View">
                        <Text>Pick a Day</Text>

                        <Button title="x" className="close-Button" onPress={hideModal} />
                    </View>

                    <View className="modal-body">
                        {segments.map((segment, index) => (
                            <Button
                                title={_pickerText(segment.week, segment.day)}
                                className="picker-Button"
                                key={index}
                                onPress={() => updateSegment(index - currentSegment)}
                            />
                        ))}
                    </View>
                </View>
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
