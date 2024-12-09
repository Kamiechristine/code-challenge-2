## Interactive Shopping List
Overview
This is a simple interactive shopping list application that allows users to:
Add items to the shopping list with a name and price.
Remove items from the list.
Clear the entire list.
The app is built using HTML, CSS, and JavaScript to manage the functionality of the shopping list.

## Features
Add Item: Allows users to input an item name and price. The item is displayed on the list with a delete button.
Delete Item: Each item in the list comes with a "Delete" button that allows the user to remove the item from the list.
Clear List: A button that clears the entire shopping list at once.
Input Validation: Ensures that the user has entered both an item name and price, and that the price is a valid number.
## How to Use
Prerequisites
A web browser (Google Chrome, Firefox, Safari, etc.)
Steps to Run Locally
Clone or Download the Repository: If you have Git installed, you can clone the repository using:
bash
git clone https://github.com/Kamiechristine/shopping-list.git
Or download the ZIP file from GitHub and extract it.

Open the HTML file: Open the index.html file in your browser. You can double-click the file or right-click and select "Open with" to choose your browser.

## Code Explanation

HTML

Contains input fields for item name and price.
A button labeled "ADD LIST" adds items to the list.
A div element (shopping-list) displays the list of added items.
A button labeled "CLEAR LIST" clears all the items in the list.

CSS

Basic styling for the shopping list and its elements.
Styled buttons for "Add Item", "Delete", and "Clear List".
Flexbox layout for proper alignment of list items.

JavaScript

Event listeners for the "Add Item" and "Clear List" buttons.
Input validation to ensure that both the item name and price are provided, and that the price is a valid number.
Functions to add and remove items from the list dynamically.
## How It Works
When you type an item name and price and click "ADD LIST", the item is added to the shopping list below. Each item is shown with its price.
Each item in the list has a "Delete" button, which, when clicked, will remove that particular item from the list.
Clicking "CLEAR LIST" will remove all items from the shopping list.
Example
Adding an Item:
Item Name: Apples
Item Price: 200 KES
When added, the shopping list will show:

css

Apples - KES200.00  [Delete]
Clear List:
Clicking on the "Clear List" button will remove all items from the list.
Roadmap / Future Enhancements
Local Storage: Implement saving the list in the browser's localStorage so that it persists after page reloads.
Price Formatting: Add currency formatting for better display of prices.
Error Handling: Enhance input validation with more detailed error messages.
User Authentication: Add user accounts to allow different users to maintain their own shopping lists.
Contributing
If you would like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. Here are a few ideas for contributions:

Improve the user interface and design.
Add more advanced input validation.
Add additional features (e.g., item quantity, category).

## License
This project is open-source and available under the MIT License.





