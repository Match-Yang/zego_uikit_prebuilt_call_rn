---
title: Quick Start
---
## Using the ZegoUIKitPrebuiltCall Component in your project

- Go to [ZEGOCLOUD Admin Console](https://console.zegocloud.com/), get the `appID` and `appSign` of your project.

- Specify the <SwmToken path="/example/src/call/HomeScreen.js" pos="10:1:1" line-data="            userIDs: userID,">`userIDs`</SwmToken> and <SwmToken path="/example/src/call/HomeScreen.js" pos="18:1:1" line-data="            userName: userID,">`userName`</SwmToken> for connecting the Call Kit service.

- Create a <SwmToken path="/example/src/call/HomeScreen.js" pos="19:1:1" line-data="            callID: callID,">`callID`</SwmToken> that represents the call you want to make.&nbsp;

<SwmSnippet path="/src/services/index.js" line="44">

---

<SwmToken path="/src/services/index.js" pos="44:3:3" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`appID`</SwmToken>:

```javascript
    init(appID, appSign, userID, userName, plugins, config = {}) {
```

---

</SwmSnippet>

<SwmSnippet path="/src/services/index.js" line="44">

---

<SwmToken path="/src/services/index.js" pos="44:3:3" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`appID`</SwmToken>: jjfeiwoajfoiewa

<SwmToken path="/src/services/index.js" pos="44:6:6" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`appSign`</SwmToken>:

```javascript
    init(appID, appSign, userID, userName, plugins, config = {}) {
```

---

</SwmSnippet>

&nbsp;

<SwmSnippet path="/src/services/index.js" line="132">

---

Service初始化后的回调

<SwmToken path="/src/services/index.js" pos="132:3:3" line-data="    onInit(callbackID, callback) {">`callbackID`</SwmToken>: 在多个地方监听onInit方法需要提供该id

<SwmToken path="/src/services/index.js" pos="132:6:6" line-data="    onInit(callbackID, callback) {">`callback`</SwmToken>: 在service初始化完成后该方法会被调用

```javascript
    onInit(callbackID, callback) {
```

---

</SwmSnippet>

<SwmSnippet path="/src/services/defines.js" line="5">

---

单人视频通话配置

<SwmToken path="/src/services/defines.js" pos="6:1:1" line-data="    turnOnCameraWhenJoining: true,">`turnOnCameraWhenJoining`</SwmToken>

<SwmToken path="/src/services/defines.js" pos="7:1:1" line-data="    turnOnMicrophoneWhenJoining: true,">`turnOnMicrophoneWhenJoining`</SwmToken>: 加入房间时打开麦克风

<SwmToken path="/src/services/defines.js" pos="8:1:1" line-data="    useSpeakerWhenJoining: true,">`useSpeakerWhenJoining`</SwmToken>

<SwmToken path="/src/services/defines.js" pos="9:1:1" line-data="    layout: {">`layout`</SwmToken>

&nbsp;

```javascript
const ONE_ON_ONE_VIDEO_CALL_CONFIG = {
```

---

</SwmSnippet>

&nbsp;

The parameters you can set for the <SwmToken path="/src/call/index.js" pos="34:1:1" line-data="        bottomMenuBarConfig = {},">`bottomMenuBarConfig`</SwmToken>

<SwmToken path="/src/call/index.js" pos="73:1:1" line-data="        maxCount2: topMaxCount = 3,">`maxCount2`</SwmToken> : 最多只显示maxCount个按钮

<SwmToken path="/src/call/index.js" pos="56:1:1" line-data="        buttons = [">`buttons`</SwmToken>: 指定在底部默认显示的按钮

<SwmToken path="/src/call/index.js" pos="74:1:1" line-data="        extendButtons: topExtendButtons = [],">`extendButtons`</SwmToken>: 可以放置你自定义的按钮

<SwmSnippet path="/src/services/index.js" line="44">

---

调用该方法以初始化Service

<SwmToken path="/src/services/index.js" pos="44:3:3" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`appID`</SwmToken>：可以总ZEGO控制台获取

<SwmToken path="/src/services/index.js" pos="44:6:6" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`appSign`</SwmToken>：可以从ZEGO控制台获取

<SwmToken path="/src/services/index.js" pos="44:9:9" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`userID`</SwmToken>: 任意有效的字符串

<SwmToken path="/src/services/index.js" pos="44:12:12" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`userName`</SwmToken>: 任意有效的字符串

<SwmToken path="/src/services/index.js" pos="44:15:15" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`plugins`</SwmToken>: 插件数组

<SwmToken path="/src/services/index.js" pos="44:18:18" line-data="    init(appID, appSign, userID, userName, plugins, config = {}) {">`config`</SwmToken>: 初始化相关配置参数

```javascript
    init(appID, appSign, userID, userName, plugins, config = {}) {
```

---

</SwmSnippet>

```
// App.js
import React, { Component } from 'react';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function VoiceCallPage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={yourAppID}
                appSign={yourAppSign}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                callID={callID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}
```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw==" repo-name="zego_uikit_prebuilt_call_rn"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
