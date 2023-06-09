# Beat Sheeter

This app is a prototype developed to enable video content creators to create a beat sheet.

# What is a Beat Sheet?

Beat sheets are commonly used as chronological outlines of a creator’s video that describe the content of the video. A beat sheet is made up of a sequence of acts, similar to what you would expect from a program guide from a play or film. Each act then contains a sequence of beats, which describe the content of the act, such as the events that occur. Beats are also time-stamped with a time frame that help describe the sequence of events in an act.

# Getting Started

## Prerequisites

The following steps require NodeJS and NPM to be installed to build and run the app in a local environment.

### Beat sheet back-end

Before running the app locally, please set-up and run the back-end APIs locally. This is required for the app to fetch beat sheet data. Please follow the installation steps [here](https://github.com/fmatar/beatsheet-exercise) to clone the repository, install Docker on your local machine and run the container that serves the beat sheet APIs.

## Running the Beat Sheeter App

To run the app in a local environment, please clone/fork the repository to your local machine and use npm to install app dependencies and run the app.

    $ git clone https://github.com/jylc08/beat-sheeter.git
    $ cd beat-sheeter/
    $ npm i
    $ npm run dev

Please ensure the beat sheet back-end is running in Docker and will take requests on port 8080 (`http://localhost:8080/`) - port 8080 is the default port for the beat sheet back-end at time of writing.

After running the dev server with `npm run dev`, view the beat sheeter app by visiting http://localhost:3000/ in your web browser.

# Desired Feature List and Enhancements

This prototype was a good starting point but there are certainly a number of features and enhancements that I didn’t have the chance to get to.

## Code Refactor

- De-duplication of styles, more consistent usage of a design system and/or UI library
- Introduce prettier and es-lint rules for consistent formatting
- More type annotations

## UI Enhancements

- Modals to add/edit acts and beats
  - Currently the forms to add new acts and add/edit beats are contained in a separate page
  - It would be an improvement to not have to navigate away from the act or beat page in order to make updates
- Loading states
  - The initial load of all acts and beats on the beat sheet page occasionally has noticeable delay so it makes sense to introduce a loading state or loading spinner
  - Currently no feedback is given when an operation (such as saving or deleting a beat) is in progress either
- Success handling
  - Currently no feedback is given when an operation
- Error handling
  - Error states from failed requests currently don’t exist, better to give feedback to the user that something went wrong

## Optimization

- Caching on API requests for optimization
  - The `swr` fetch hooks have caching abilities
  - The app re-fetches the data of acts and beats when navigating the page, but they don’t have to
- Fix server side rendering
  - All data is currently fetched client side, but can be fetched on the server
  - Styled components

# Preview

![Screen 1](/screens/screen1.png?raw=true 'Screen 1')
![Screen 2](/screens/screen2.png?raw=true 'Screen 2')
