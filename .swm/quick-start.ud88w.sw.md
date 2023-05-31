---
id: ud88w
title: Quick Start
file_version: 1.1.2
app_version: 1.9.14
---

## Using the ZegoUIKitPrebuiltCall Component in your project

*   Go to [ZEGOCLOUD Admin Console](https://console.zegocloud.com/), get the `appID` and `appSign` of your project.

*   Specify the `userID` and `userName` for connecting the Call Kit service.

*   Create a `callID` that represents the call you want to make.
<br/>

<br/>

`appID`<swm-token data-swm-token=":src/services/index.js:44:3:3:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/services/index.js
```javascript
44         init(appID, appSign, userID, userName, plugins, config = {}) {
```

<br/>

`appID`<swm-token data-swm-token=":src/services/index.js:44:3:3:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>: jjfeiwoajfoiewa

`appSign`<swm-token data-swm-token=":src/services/index.js:44:6:6:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/services/index.js
```javascript
44         init(appID, appSign, userID, userName, plugins, config = {}) {
```

<br/>

<br/>

<br/>

Service初始化后的回调

`callbackID`<swm-token data-swm-token=":src/services/index.js:132:3:3:`    onInit(callbackID, callback) {`"/>: 在多个地方监听onInit方法需要提供该id

`callback`<swm-token data-swm-token=":src/services/index.js:132:6:6:`    onInit(callbackID, callback) {`"/>: 在service初始化完成后该方法会被调用
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/services/index.js
```javascript
132        onInit(callbackID, callback) {
```

<br/>

单人视频通话配置

`turnOnCameraWhenJoining`<swm-token data-swm-token=":src/services/defines.js:6:1:1:`    turnOnCameraWhenJoining: true,`"/>

`turnOnMicrophoneWhenJoining`<swm-token data-swm-token=":src/services/defines.js:7:1:1:`    turnOnMicrophoneWhenJoining: true,`"/>: 加入房间时打开麦克风

`useSpeakerWhenJoining`<swm-token data-swm-token=":src/services/defines.js:8:1:1:`    useSpeakerWhenJoining: true,`"/>

`layout`<swm-token data-swm-token=":src/services/defines.js:9:1:1:`    layout: {`"/>

<!-- empty line --><br/>
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/services/defines.js
```javascript
5      const ONE_ON_ONE_VIDEO_CALL_CONFIG = {
```

<br/>

<br/>

The parameters you can set for the `bottomMenuBarConfig`<swm-token data-swm-token=":src/call/index.js:34:1:1:`        bottomMenuBarConfig = {},`"/>

`maxCount2`<swm-token data-swm-token=":src/call/index.js:73:1:1:`        maxCount2: topMaxCount = 3,`"/> : 最多只显示maxCount个按钮

`buttons`<swm-token data-swm-token=":src/call/index.js:56:1:1:`        buttons = [`"/>: 指定在底部默认显示的按钮

`extendButtons`<swm-token data-swm-token=":src/call/index.js:74:1:1:`        extendButtons: topExtendButtons = [],`"/>: 可以放置你自定义的按钮

<br/>

调用该方法以初始化Service

`appID`<swm-token data-swm-token=":src/services/index.js:44:3:3:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>：可以总ZEGO控制台获取

`appSign`<swm-token data-swm-token=":src/services/index.js:44:6:6:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>：可以从ZEGO控制台获取

`userID`<swm-token data-swm-token=":src/services/index.js:44:9:9:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>: 任意有效的字符串

`userName`<swm-token data-swm-token=":src/services/index.js:44:12:12:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>: 任意有效的字符串

`plugins`<swm-token data-swm-token=":src/services/index.js:44:15:15:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>: 插件数组

`config`<swm-token data-swm-token=":src/services/index.js:44:18:18:`    init(appID, appSign, userID, userName, plugins, config = {}) {`"/>: 初始化相关配置参数
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/services/index.js
```javascript
44         init(appID, appSign, userID, userName, plugins, config = {}) {
```

<br/>

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

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw==/docs/ud88w).
