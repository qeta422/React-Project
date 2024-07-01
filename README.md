### This project is a single-page application (SPA) built with React. It includes features such as dark/light theme toggling, client-side routing using React Router, form handling, and deployment to Netlify.

#### Features
* React Hooks: Utilized various React hooks such as useState, useEffect, useContext, and custom hooks.
* React Router: Implemented client-side routing for navigation between different pages.
* Form Handling: Used react-hook-form and yup for form handling and validation.
* Theme Toggling: Added dark/light theme support using CSS variables and React context.
* API Integration: Fetched data from an external API and displayed it on the homepage.
* Deployment: Deployed the application to Netlify with proper handling of client-side routing.

#### Project structure

![image](https://github.com/qeta422/React-Project/assets/127484977/5ac0661f-a3c4-4857-b5c4-293a59335b6e)

#### Setup and Installation
Clone the repository:

![image](https://github.com/qeta422/React-Project/assets/127484977/f6a346dc-a5c6-4e32-9009-a02c75cb9f92)

#### Install dependencies:

![image](https://github.com/qeta422/React-Project/assets/127484977/a2371d40-e3de-4ad1-9ea8-2cba6b564288)

#### Start the development server:

![image](https://github.com/qeta422/React-Project/assets/127484977/13dd0d6c-85d2-43e1-9649-c8eb4e74b2d5)

## Usage
### Theme Toggling
The Navbar includes a button to toggle between light and dark themes.

The theme state is managed using useContext and useState hooks.
### Form Handling
The "Your Story" page contains a form for creating new stories.

The form uses react-hook-form for handling input and yup for validation.
### Routing
The app uses react-router-dom for client-side routing.
### Routes:
/: HomePage

/authors: AuthorsPage

/your-story: YourStoryPage
### API Integration
Fetched stories from the Short Stories API and displayed them on the homepage.
### Deployment
The app is deployed on Netlify.

The _redirects file in the public directory ensures proper handling of client-side routing.
