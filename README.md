# React-exam React exam

# Travel App

The Travel App is a web application that allows users to manage and view their travel trips. It provides features for creating new trips, viewing trip details, and deleting trips.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Next.js: A React framework for server-side rendering and static site generation.
- Axios: A promise-based HTTP client for making API requests.
- CSS Modules: A CSS approach that locally scopes styles to prevent conflicts.

## Getting Started

To get started with the Travel App, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/travel-app.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the app in your browser at `http://localhost:3000`

## Usage

- Create a new trip by filling in the destination, duration, date, and image URL in the "Insert New Trip" form and clicking the "Insert New Trip" button.
- View the details of a trip by clicking on the trip card on the home page.
- Delete a trip by clicking the "Delete this Trip" button on the trip details page.

## API Integration

The Travel App integrates with a mock API for storing and retrieving trip data. The API base URL is `https://643d6ef5f0ec48ce905c44fe.mockapi.io/trips`.

- `GET /trips`: Retrieves all trips.
- `GET /trips/{id}`: Retrieves a specific trip by its ID.
- `POST /trips`: Creates a new trip.
- `DELETE /trips/{id}`: Deletes a trip by its ID.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


