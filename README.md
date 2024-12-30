# Posts-And-Users
Mobile App Developer Assignment Vision and Graphics lab, Dept. of CSE Indian Institute of Technology Delhi

# React Native Post Feed & User Profile App

This is a simple React Native app that fetches posts and user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). The app consists of two main screens:

1. **HomePage**: Displays a list of posts with the ability to search users by name.
2. **UserProfile**: Displays detailed information about a user and their posts.

## Features

- Fetches posts and users from the JSONPlaceholder API.
- Displays posts in a shuffled order on the HomePage.
- Allows users to search for users by name.
- Displays user details and their posts on the UserProfile screen.
- Implements navigation between HomePage and UserProfile using React Navigation.

## Screens

### HomePage

- Displays a list of posts.
- Users can search for other users by name.
- Tapping on a post navigates to the UserProfile screen of the post's author.

### UserProfile

- Displays the user's details such as name, username, email, phone, website, and company.
- Shows the user's address in a formatted card.
- Displays a list of posts by the user.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI
- Android Studio (for building the APK)
- A React Native development environment set up with Android SDK

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Grey-matter47/Posts-And-Users
   cd <name_of_project_directory>
   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Run the app on a simulator or a physical device:

   ```bash
   expo start
   ```

- This will open the Expo Developer Tools in your browser. You can scan the QR code with the Expo Go app on your phone or use an Android/iOS simulator to run the app.

### Screenshots

- HomePage
<img width="410" alt="Screenshot 2024-12-30 at 6 12 03 PM" src="https://github.com/user-attachments/assets/0e0eff77-1664-4941-8ddc-59b0a691be11" />

- UserProfile
<img width="417" alt="Screenshot 2024-12-30 at 6 13 22 PM" src="https://github.com/user-attachments/assets/99cc8938-6eaf-4a5b-9df6-6eb6484e1578" />


### API Endpoints

- The app fetches data from the following endpoints:

- Fetch Posts: https://jsonplaceholder.typicode.com/posts
- Fetch Users: https://jsonplaceholder.typicode.com/users
-  Fetch User Details: https://jsonplaceholder.typicode.com/users/{userId}
-  Fetch User Posts: https://jsonplaceholder.typicode.com/posts?userId={userId}

## File Structure

   ```bash
.
├── App.js                 # Main entry point for the app, sets up navigation
├── package.json           # Project dependencies
├── src
│   ├── services
│   │   └── api.js         # API calls to fetch posts and user data
│   └── screens
│       ├── HomePage.js    # Home screen with posts and search functionality
│       └── UserProfile.js # User profile screen displaying user details and posts
└── README.md              # Project documentation
```

### Dependencies

- @react-navigation/native: Navigation library for React Native.
- @react-navigation/stack: Stack navigation for React Native.
- react-native-gesture-handler: Gesture handler library for React Native.
- react-native-safe-area-context: A utility for managing safe areas.
- react-native-paper: Material Design components for React Native.
- @expo/vector-icons: Icon library for React Native.

### Development

#### Running the App

- To run the app in development mode:

```bash
expo start
```
- This will start the development server, and you can open the app on your phone or simulator using Expo Go.

#### Building the APK
- To build an APK for the app, you can use Expo's build service:

- Ensure you are logged in to Expo:

```bash
expo login
 ```
- Build the APK:

```bash
expo build:android
```
- Once the build is complete, Expo will provide a download link for the APK.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.


### Acknowledgements
- JSONPlaceholder API for providing mock data.
- React Navigation for handling app navigation.
- React Native for building the app.


# Feel free to modify and extend the app as per your requirements!




````
