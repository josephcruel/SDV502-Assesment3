// HTML setup for testing the bus ticket system
document.body.innerHTML = `
  <div class="container">
      <form id="bookingForm">
          <input type="text" id="name" value="Joseph" required>
          <input type="text" id="destination" value="Nelson" required>
          <input type="number" id="seats" value="2" required>
          <button type="submit">Book Ticket</button>
      </form>
      <p id="message"></p>
  </div>
`;

// Import the main script
require('../src/script.js');

describe('Bus Ticket System', () => {
  

  test('should display booking confirmation with correct fare', () => {

    // Simulate form submission
    document.getElementById("bookingForm").dispatchEvent(new Event("submit"));
    // Get the message displayed
    const message = document.getElementById("message").innerText;
    // Check if the message matches and is correct
    expect(message).toBe("Booking confirmed for Joseph to Nelson. Seats: 2. Total fare: $20.");
  });

  test('should display error message for invalid input', () => {
    
    // Set the seat number to 0 and submit the form
    document.getElementById("seats").value = "0";
    document.getElementById("bookingForm").dispatchEvent(new Event("submit"));
    // Get the error message displayed
    const message = document.getElementById("message").innerText;
    // Check if the message is correct
    expect(message).toBe("Please fill in all fields correctly.");
  });

  test('should calculate fare correctly based on seat number', () => {

    // Set the seat number to 3 and submit the form
    document.getElementById("seats").value = "3";
    document.getElementById("bookingForm").dispatchEvent(new Event("submit"));
    // Get the message displayed
    const message = document.getElementById("message").innerText;
    // Check if the message is correct
    expect(message).toBe("Booking confirmed for Joseph to Nelson. Seats: 3. Total fare: $30.");
  });
  
});
