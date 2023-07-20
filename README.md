# React Native List App

A simple mobile app for creating lists built with React Native.

## Features

- Create multiple lists with different names
- Add, edit, and delete list items
- Mark items as completed
- Persist data using AsyncStorage
- Responsive design for iOS and Android

## Getting Started

```
npm install
npx react-native run-ios
npx react-native run-android
```

## Usage

- Tap '+' to create a new list  
- Give the list a title
- Add items to the list with the submit button
- Tap items to mark as completed
- Swipe left on an item for delete option
- Long press a list for delete option

## Customizing

Main screens are located in `/screens`:

- HomeScreen - Lists index
- ListScreen - Displays a single list 
- AddListScreen - Form to create a new list

List data is persisted with [AsyncStorage](https://react-native-async-storage.github.io/async-storage/).

This project was bootstrapped with [Expo](https://expo.io/).

## License

MIT License
