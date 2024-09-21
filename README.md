# Project Title

Shippex

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/repository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Login Screen

Upon opening the application, you will be greeted with a login screen. The login screen requires three fields:

- **URL:** This field is not part of the parameters sent to the authentication endpoint.
- **Username and Password:** Both fields are mandatory for successful login.

--**username:** test@brandimic.com

--**password:** testy123@

### Successful Sign-In

On successful sign-in, the session start is stored in `AsyncStorage`. To test the application multiple times without re-logging, you can check the **Profile** page, which has a **Logout** button to end the session.

## Fetching Shipments

To fetch shipments, the API endpoint uses a pre-signed **SID** token. However, it's important to note:

- The endpoint might not be optimized for mobile integration.
- The Postman documentation used during testing saved a cookie, which allowed successful data fetching in Postman but created issues when trying to retrieve the same data programmatically.

Due to this, you may not be able to fetch data from those endpoints directly without resolving the cookie-based authentication issue.

## Notes

- If you encounter issues fetching data from the shipment endpoints, check the server logs for additional details on authentication failures or endpoint requirements.

## License

[MIT](LICENSE)
