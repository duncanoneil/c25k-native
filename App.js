import React from 'react';

import Timer from './components/Timer';
import Navigation from './components/Navigation';
import IntervalTracker from './components/IntervalTracker';
import PickerModal from './components/PickerModal';

import {Button, StyleSheet, Text, View} from 'react-native';

import {SEGMENTS} from './data/segments';
import ding from './data/265012__sethlind__toaster-oven-ding.mp3';

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
        this._playSound(ding);
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
            <View className="main">
                <View className="header">
                    <Text className="main-header">Week {segment.week}</Text>
                    <Text className="main-header gray">Day {segment.day}</Text>
                </View>

                <View className="interval-timer">
                    <Text className="interval-text gray">{this.getIntervalType()}</Text>
                    <Timer
                        intervals={segment.intervals}
                        updateInterval={this.updateInterval}
                        segment={this.state.segment}
                        play={this.state.play}
                    />
                </View>

                <View className="total-timer">
                    <Text className="sub-header">Total Time</Text>
                    <Timer
                        intervals={[segment.intervals.reduce((prev, curr) => prev + curr)]}
                        updateInterval={() => ''}
                        segment={this.state.segment}
                        play={this.state.play}
                    />
                </View>

                <View className="play-pause">
                    <Button title={this.state.play ? 'Pause' : 'Play'} className="play-Button" onPress={this.playPause} />
                </View>

                <View className="intervals">
                    <Text className="sub-header">Intervals</Text>
                    <IntervalTracker
                        current={this.state.interval}
                        total={segment.intervals.length - 2}
                    />
                </View>

                <View className="navigation">
                    <Navigation
                        week={segment.week}
                        day={segment.day}
                        triggerNavigation={this.updateSegment}
                        showModal={this.showModal}
                    />
                </View>

                {this.state.showModal && (
                    <PickerModal
                        segments={SEGMENTS}
                        currentSegment={this.state.segment}
                        updateSegment={this.updateSegment}
                        hideModal={this.hideModal}
                    />
                )}
            </View>
        );



        //this._playSound();
        // return (
        //     <View style={styles.container}>
        //         <Text>Week {segment.week}, Day {segment.day}</Text>
        //         <Text>Open up App.js to start working on your app!</Text>
        //         <Text>Changes you make will automatically reload.</Text>
        //         <Text>Shake your phone to open the developer menu.</Text>
        //     </View>
        // );
    }

    async _playSound(theSound) {

        const soundObject = new Expo.Audio.Sound();

        try {
        await soundObject.loadAsync(theSound);
        await soundObject.playAsync();
        // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
