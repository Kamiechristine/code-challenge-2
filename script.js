// Getting elements
const addButton = document.getElementById("addbutton");
const clearButton = document.getElementById("clearbutton");
const shoppingListDiv = document.getElementById("shopping list");
const itemNameInput = document.getElementById("item name");
const itemPriceInput = document.getElementById("item price");

// Function to add an item to the shopping list
addButton.addEventListener("click", () => {
    const itemName = itemNameInput.value.trim();
    const itemPrice = itemPriceInput.value.trim();

    if (itemName === "" || itemPrice === "") {
        alert("Please enter both item name and price.");
        return;
    }

    if (isNaN(itemPrice)) {
        alert("Please enter a valid number for the price.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("div");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    listItem.style.marginBottom = "10px";

    // Add item details
    const itemText = document.createElement("span");
    itemText.textContent = `${itemName} - KES${parseFloat(itemPrice).toFixed(2)}`;
    listItem.appendChild(itemText);

    // Add delete button for each item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.cursor = "pointer";

    // Delete item functionality
    deleteButton.addEventListener("click", () => {
        shoppingListDiv.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    shoppingListDiv.appendChild(listItem);

    // Clear input fields
    itemNameInput.value = "";
    itemPriceInput.value = "";
});

// Function to clear the entire shopping list
clearButton.addEventListener("click", () => {
    shoppingListDiv.innerHTML = "";
});