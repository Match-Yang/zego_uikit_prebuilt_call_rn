import React, { useRef } from 'react';
import { Alert } from 'react-native';

import { StyleSheet, View, Text, Button } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import KeyCenter from '../KeyCenter';

export default function VoiceCallScreen(props) {
    const prebuiltRef = useRef();
    const { route } = props;
    const { params } = route;
    const { userID, userName, callID } = params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                ref={prebuiltRef}
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                callID={callID}

                config={{
                    ...ONE_ON_ONE_VOICE_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('HomeScreen'); },
                    onHangUp: (duration) => {
                        console.log('########VoiceCallScreen onHangUp', duration);
                        props.navigation.navigate('HomeScreen');
                    },
                    onHangUpConfirmation: () => {
                        return new Promise((resolve, reject) => {
                            Alert.alert(
                                "Leave the call",
                                "Are your sure to leave the call",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => {
                                            reject();
                                        },
                                        style: "cancel"
                                    },
                                    {
                                        text: "Confirm", onPress: () => {
                                            resolve();
                                        }
                                    }
                                ]
                            );
                        })
                    },
                    durationConfig: {
                        isVisible: true,
                        onDurationUpdate: (duration) => {
                            console.log('########VoiceCallScreen onDurationUpdate', duration);
                            if (duration > 10) {
                                prebuiltRef.current.hangUp(false);
                            }
                        }
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    audioVideoView: {
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 1,
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red'
    },
    ctrlBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 50,
        width: '100%',
        height: 50,
        zIndex: 2
    },
    ctrlBtn: {
        flex: 1,
        width: 48,
        height: 48,
        marginLeft: 37 / 2,
        position: 'absolute'
    }
});
