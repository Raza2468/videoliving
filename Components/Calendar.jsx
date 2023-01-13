import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function CalenderScreen() {

    
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const startDate = selectedStartDate
        ? selectedStartDate.format('YYYY-MM-DD').toString()
        : '';
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
        },
        // backgroundColor:"red",
        dateText: {
            margin: 16,
        },
    });
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <CalendarPicker onDateChange={setSelectedStartDate} />
            <Text style={styles.dateText}>Start with {startDate}</Text>
            <Text style={styles.dateText}>End With {startDate}</Text>
        </View>
    );
}