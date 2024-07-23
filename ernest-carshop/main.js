// Get all purchase buttons
const purchaseButtons = document.querySelectorAll('#Purchase');

// Add event listener to each button
purchaseButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the parent element of the button (the car listing)
    const carListing = button.parentNode.parentNode;

    // Get the car details (name and price)
    const carName = carListing.querySelector('figcaption').textContent;
    const carPrice = carListing.querySelector('p').textContent;

    // Create a new section for the purchased item
    const purchasedSection = document.createElement('section');
    purchasedSection.className = 'bg-white leading-7 mb-4';

    const purchasedItemHTML = `
      <h2>Purchased Item: ${carName}</h2>
      <p>Price: ${carPrice}</p>
    `;
    purchasedSection.innerHTML = purchasedItemHTML;

    // Add the new section to the page
    document.body.appendChild(purchasedSection);
  });
});
