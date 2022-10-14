import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from "react-native";
import ZegoMenuBarButtonName from "./ZegoMenuBarButtonName";
import ZegoMemberButton from "./ZegoMemberButton";

export default function ZegoTopBar(props) {
    const {
        menuTitle,
        menuBarButtonsMaxCount,
        menuBarButtons,
        menuBarExtendedButtons,
        onOpenCallMemberList,
    } = props;

    const getButtonByButtonIndex = (buttonIndex) => {
        switch (buttonIndex) {
            case ZegoMenuBarButtonName.showMemberListButton:
                return <ZegoMemberButton key={5} onPress={openCallMemberList}/>
        }
    };
    const getDisplayButtons = () => {
        let allButtons = [];
        menuBarButtons.slice(0, menuBarButtonsMaxCount).forEach(buttonIndex => {
            allButtons.push(getButtonByButtonIndex(buttonIndex));
        });
        allButtons = allButtons.concat(menuBarExtendedButtons);
        return allButtons;
    };
    const getButtonStyle = () => {
        return styles.customIconCon;
    };
    const openCallMemberList = () => {
        onOpenCallMemberList();
    };

    const allButtons = getDisplayButtons();

    return (<View style={styles.topBarCon}>
        <View style={styles.left}>
            <TouchableWithoutFeedback>
                <Image
                    style={styles.downArrowIcon}
                    source={require('./resources/white_button_arrow.png')}
                />
            </TouchableWithoutFeedback>
            <Text style={styles.title}>{menuTitle}</Text>
        </View>
        <View style={styles.right}>{
            allButtons.map(button => <View style={getButtonStyle()}>{button}</View>)
        }</View>
    </View>);
}

const styles = StyleSheet.create({
    topBarCon: {
        backgroundColor: '#171821',
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        top: 0,
        height: 60,
        zIndex: 3,
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 16,
    },
    left: {
        flexDirection: 'row',
        alignItems: "center",
    },
    right: {
        flexDirection: 'row',
        alignItems: "center",
    },
    downArrowIcon: {
        width: 50,
        height: 50,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 4,
    },
    customIconCon: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
});