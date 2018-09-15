import React from 'react';

import Timer from './components/Timer';
import Navigation from './components/Navigation';
import IntervalTracker from './components/IntervalTracker';
import PickerModal from './components/PickerModal';

import {Button, StyleSheet, Text, View} from 'react-native';

import {SEGMENTS} from './data/segments';
import speedUp from './data/speed-up.mp3';
import slowDown from './data/slow-down.mp3';
import sessionComplete from './data/session-complete.mp3';

import styles from './style'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            segment: 0,
            interval: 0,
            showModal: false,
            play: false
        };
    }

    updateSegment = (adjustment) => {
        this.setState((prevState) => ({
            segment: prevState.segment + adjustment,
            interval: 0,
            play: false,
            showModal: false
        }));
    };

    updateInterval = (newInterval) => {
        this.setState({ interval: newInterval });

        if (
            newInterval ===
            SEGMENTS[this.state.segment].intervals.length - 1
        ) {
            this._playSound(sessionComplete);
        } else if (newInterval % 2 === 1) {
            this._playSound(speedUp);
        } else {
            this._playSound(slowDown);
        }
    };

    showModal = () => {
        this.setState({
            showModal: true
        });
    };

    hideModal = () => {
        this.setState({
            showModal: false
        });
    };

    playPause = () => {
        this.setState((prevState) => ({
            play: !prevState.play
        }));
    };

    getIntervalType() {
        const currentInterval = this.state.interval;
        if (currentInterval === 0) {
            return 'Warmup';
        } else if (
            currentInterval ===
            SEGMENTS[this.state.segment].intervals.length - 1
        ) {
            return 'Cooldown';
        } else if (currentInterval % 2 === 1) {
            return 'Run';
        } else {
            return 'Walk';
        }
    }

    render() {
        const segment = SEGMENTS[this.state.segment];

        return (
            <View style={styles.main}>
                {this.state.showModal && (
                    <PickerModal
                        segments={SEGMENTS}
                        currentSegment={this.state.segment}
                        updateSegment={this.updateSegment}
                        hideModal={this.hideModal}
                    />
                )}

                <View style={styles.header}>
                    <Text style={styles.headerText}>Week {segment.week}, Day {segment.day}</Text>
                </View>

                <View style={styles.interval}>
                    <Text style={styles.intervalText}>{this.getIntervalType()}</Text>
                    <Timer
                        intervals={segment.intervals}
                        updateInterval={this.updateInterval}
                        segment={this.state.segment}
                        play={this.state.play}
                        scale={1}
                    />
                </View>

                <View style={styles.play}>
                    <Button title={this.state.play ? 'Pause' : 'Start'}  color="green" onPress={this.playPause} />
                </View>

                <View style={styles.flexed}>

                    <View style={styles.flex1}>
                        <Text style={styles.subHeader}>Total Time</Text>
                        <Timer
                            intervals={[segment.intervals.reduce((prev, curr) => prev + curr)]}
                            updateInterval={() => ''}
                            segment={this.state.segment}
                            play={this.state.play}
                            scale={0.4}
                        />
                    </View>

                    <View style={styles.flex1}>
                        <Text style={styles.subHeader}>Intervals</Text>
                        <IntervalTracker
                            current={this.state.interval}
                            total={segment.intervals.length - 2}
                        />
                    </View>

                </View>

                <View style={styles.navigation}>
                    <Navigation
                        week={segment.week}
                        day={segment.day}
                        triggerNavigation={this.updateSegment}
                        showModal={this.showModal}
                    />
                </View>
            </View>
        );
    }

    async _playSound(theSound) {
        const soundObject = new Expo.Audio.Sound();
        try {
            await soundObject.loadAsync(theSound);
            await soundObject.playAsync();
        } catch (error) {
            // An error occurred!
        }
    }
}
