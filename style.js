import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({
    main: {
        margin: 20,
        marginTop: 40,
        marginBottom: 20,
    },

    header: {
        margin: 0,
    },

    headerText: {
        margin: 0,
        fontSize: 50,
    },

    subHeader: {
        color: 'darkgray',
        marginTop: 0,
    },

    interval: {},

    intervalText: {
        margin: 0,
        fontSize: 30,
        textAlign: 'center',
    },

    flexed: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 10,
        marginBottom: 30,
    },

    flex1: {
        flex: 1,
    },

    navigation: {
        marginTop: 80,
    },

    timer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 30,
    },

    intervalTracker: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 30,
    },

    intervalTrackerText: {
        fontSize: 30,
    },

    navigationButtons: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'baseline',
        justifyContent: 'center',
    },

    navigationButton: {
        marginLeft: 2,
        marginRight: 2,
    },

    picker: {
        flex: 0,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },

    pickerHeader: {
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        zIndex: 100,
    },

    pickerHeaderText: {
        margin: 0,
        fontSize: 20,
        width: '80%',
    },

    pickerHeaderClose: {
        width: '20%',
    },

    pickerButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        top: -460,
    },

    pickerButton: {
        width: '46%',
        margin: '2%',
        marginTop: 2,
        marginBottom: 1,
    },

    gray: {
        color: 'gray',
    },
});