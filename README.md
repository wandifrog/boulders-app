# Boulders App

This project was bootstrapped with `npx react-native@latest`.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- [React Native CLI setup](https://reactnative.dev/docs/environment-setup)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/wandifrog/boulders-app.git
    ```

2. Change into the project directory:
    ```sh
    cd boulders-app
    ```

3. Install project dependencies:

    If you use npm:
    ```sh
    npm install
    ```

    If you use yarn:
    ```sh
    yarn
    ```

### Running the App

Once you have installed the dependencies, you can run the development server:
```sh
npm start
# or
yarn start
```

This will start the React Native Metro bundler and run your app on an Android or iOS device.

## Build the App

### Android for macOS

Before building the app, make sure you have installed `bundletool`. You can install it using the following command:
```sh
brew install bundletool
```

Once `bundletool` is installed, you can build the app using the following steps:

1. Move to the Android folder of your React Native app:
   ```sh
   cd android
   ```
2. Run the `./build.zsh` script:
   ```sh
   ./build.zsh
   ```
This will build your React Native app into an APK file and an ABB file in the `AwesomeProject/build` directory.

To install the APK file on an Android device, you can use one of the following methods:

* Connect your Android device to your computer using a USB cable.
* Enable wireless debugging on your Android device.
* Use a third-party tool, such as ADB, to install the APK file on your Android device.

## Release

To publish your React Native app to the Google Play Store and Apple App Store, you will need to follow the steps below:

* [Building a signed APK for Android](https://reactnative.dev/docs/signed-apk-android)
* [Publishing to the App Store](https://reactnative.dev/docs/publishing-to-app-store)

Here is a brief overview of the steps involved:

**Building a signed APK for Android:**

1. Generate a signing key.
2. Add the signing key to your project's Gradle configuration.
3. Build the app in release mode.
4. Sign the APK file.

**Publishing to the App Store:**

1. Create an Apple Developer account.
2. Create a new app in App Store Connect.
3. Upload the signed IPA file.
4. Submit your app for review.

I hope this is helpful!