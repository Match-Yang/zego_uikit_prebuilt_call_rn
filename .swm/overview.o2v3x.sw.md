---
id: o2v3x
title: Overview
file_version: 1.1.2
app_version: 1.9.14
---

**Call Kit** is a prebuilt feature-rich call component, which enables you to build **one-on-one and group voice/video calls** into your app with only a few lines of code.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw%3D%3D%2F2b0c7ccd-e9c0-4188-9e42-3274ac6b1a5c.png?alt=media&token=ec2e0552-4101-47dc-8e73-06761c85654a" style="width:'100%'"/></div>

<br/>

And it includes the business logic with the UI, you can add or remove features accordingly by customizing UI components.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw%3D%3D%2Fcf445cf4-62d1-4ea9-9382-3da0b75c075a.png?alt=media&token=cf708cec-74bc-4c34-b141-a387109250fd" style="width:'25%'"/></div>

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw%3D%3D%2F77265bb8-519b-49f7-a24c-dc652a94e75f.png?alt=media&token=ab95a8f6-a12a-45df-bd4c-12966fca601d" style="width:'25%'"/></div>

<br/>

<br/>

## When do you need the Call Kit

*   Build apps faster and easier

    *   When you want to prototype 1-on-1 or group voice/video calls **ASAP**

    *   Consider **speed or efficiency** as the first priority

    *   Call Kit allows you to integrate **in minutes**

*   Customize UI and features as needed

    *   When you want to customize in-call features **based on actual business needs**

    *   **Less time wasted** developing basic features

    *   Call Kit includes the business logic along with the UI, allows you to **customize features accordingly**

## Embedded features

*   Ready-to-use one-on-one/group calls

*   Customizable UI styles

*   Real-time sound waves display

*   Device management

*   Switch views during a one-on-one call

*   Extendable top/bottom menu bar

*   Participant list

# Quick start

Read more from [our official website](https://docs.zegocloud.com/article/14764)

## Integrate the SDK

### Import the SDK

### Add @zegocloud/zego-uikit-prebuilt-call-rn as dependencies

```
yarn add @zegocloud/zego-uikit-prebuilt-call-rn 
```

### Add other dependencies

Run the following command to install other dependencies for making sure the `@zegocloud/zego-uikit-prebuilt-call-rn` can work properly:

```
yarn add @zegocloud/zego-uikit-rn react-delegate-component zego-express-engine-reactnative
```

### Using the `ZegoUIKitPrebuiltCall` Component in your project

*   Go to [ZEGOCLOUD Admin Console|\_blank](https://console.zegocloud.com/), get the `appID` and `appSign` of your project.

*   Get the `userID` and `userName` for connecting the Video Call Kit service.

*   And also get a `callID` for making a call.

> \- \`userID\` and \`callID\` can only contain numbers, letters, and underlines (\_).
> 
> \- Users that join the call with the same \`callID\` can talk to each other.

## Configure your project

*   Android:

Open `my_project/android/app/src/main/AndroidManifest.xml` file and add the code as follow:

```
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
```

*   iOS:

Open `my_project/ios/my_project/Info.plist` file and add the code as follow:

```
<key>NSCameraUsageDescription</key>
<string></string>
<key>NSMicrophoneUsageDescription</key>
<string></string>
```

## Run & Test

*   Run on an iOS device:

```
yarn android
```

*   Run on an Android device:

```
yarn ios
```

## Related guide

## Recommended resources

[Custom prebuilt UI](https://docs.zegocloud.com/article/14767)

[Complete Sample Code](https://github.com/ZEGOCLOUD/zego_uikit_prebuilt_call_example_rn)

[About Us](https://www.zegocloud.com)

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBemVnb191aWtpdF9wcmVidWlsdF9jYWxsX3JuJTNBJTNBTWF0Y2gtWWFuZw==/docs/o2v3x).
