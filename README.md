# XMLHttpRequestUpload in Expo
Simple React Native projects using XMLHttpRequestUpload to listen for upload progress.

## Getting started
1. Run the server
```sh
$ cd server
$ node server
```
2. Run apps against iOS simulators and press "Upload"

## App index
### rnxhr71
React Native v0.71 app

Commands used to create and run app
```sh
$ npx react-native@0.71.14 init rnxhr71
$ yarn ios
```
### rnxhr73
React Native v0.73 app

Commands used to create and run app
```sh
$ npx react-native@0.73.6 init rnxhr73
$ yarn ios
```
### xhr-48
Expo Go SDK 48 app
Commands used to create and run app
```sh
$ npx create-expo-app -t blank@48
$ yarn ios
```
### xhr-latest
Expo Go SDK 50 (latest) app
Commands used to create and run app
```sh
$ npx create-expo-app xhr-latest
$ yarn ios
```
### xhr-latest-built
Expo Go SDK 50 (latest) app
Commands used to create and run app
```sh
$ npx create-expo-app xhr-latest-built
$ npx expo run:ios
```