import { Alert } from 'react-native';

export default class TimingHelper {
    _instance;
    _duration = 0;
    _debounce = false;

    constructor() { }
    static getInstance() {
        return this._instance || (this._instance = new TimingHelper());
    }
    setDuration(duration) {
        this._duration = duration;
    }
    getDuration() {
        return this._duration;
    }
    setDebounce(debounce) {
        this._debounce = !!debounce;
    }
    getDebounce() {
        return this._debounce;
    }
    showLeaveAlert(hangUpConfirmInfo) {
        return new Promise((resolve, reject) => {
            if (hangUpConfirmInfo) {
                const {
                    title = "Leave the call",
                    message = "Are you sure to leave the call?",
                    cancelButtonName = "Cancel",
                    confirmButtonName = "Confirm"
                } = hangUpConfirmInfo;
                Alert.alert(
                    title,
                    message,
                    [
                        {
                            text: cancelButtonName,
                            onPress: () => {
                                reject();
                            },
                            style: "cancel",
                        },
                        {
                            text: confirmButtonName,
                            onPress: () => {
                                resolve();
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            } else {
                resolve();
            }
        });
    }
}