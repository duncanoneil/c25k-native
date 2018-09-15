import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View} from 'react-native';
import styles from '../style'

// Yes, this is basically the same thing as the stateful component example from: https://facebook.github.io/react/
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            intervalIndex: 0
        };
    }

    tick() {
        const nextSeconds = this.state.seconds + 1;

        // End of interval
        if (nextSeconds > this.props.intervals[this.state.intervalIndex]) {
            // End of segment
            if (this.state.intervalIndex === this.props.intervals.length - 1) {
                this.stop();

                // On to the next interval
            } else {
                const newIntervalIndex = this.state.intervalIndex + 1;
                this.setState({
                    seconds: 1,
                    intervalIndex: newIntervalIndex
                });
                this.props.updateInterval(newIntervalIndex);
            }

            // Business as usual
        } else {
            this.setState({
                seconds: nextSeconds
            });
        }
    }

    start() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = false;
    }

    componentDidMount() {
        this.props.play && this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.segment !== this.props.segment) {
            this.setState({
                seconds: 0,
                intervalIndex: 0
            });
        }
        if (!this.interval && nextProps.play) {
            this.start();
        }
        if (this.interval && !nextProps.play) {
            this.stop();
        }
    }

    format(seconds) {
        const remainderSeconds = seconds % 60;
        return (
            Math.floor(seconds / 60) +
            ':' +
            (remainderSeconds < 10 ? '0' : '') +
            remainderSeconds
        );
    }

    _fontSize(scale) {
        var size = 90 * this.props.scale * scale;
        return {fontSize: size};
    }

    render() {
        return (
            <View style={styles.timer}>
                <Text style={this._fontSize(1)}>{this.format(this.state.seconds)}</Text>
                <Text style={this._fontSize(0.4)}>
                    / {this.format(this.props.intervals[this.state.intervalIndex])}
                </Text>
            </View>
        );
    }
}

Timer.propTypes = {
    intervals: PropTypes.array.isRequired,
    updateInterval: PropTypes.func.isRequired,
    segment: PropTypes.number.isRequired,
    play: PropTypes.bool.isRequired,
    scale: PropTypes.number.isRequired,
};

export default Timer;
