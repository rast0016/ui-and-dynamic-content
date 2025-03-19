document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const itemList = document.getElementById("itemList");
    const feedback = document.querySelector(".feedback");

    addItemBtn.addEventListener("click", () => {
        const itemValue = itemInput.value.trim();
        if (itemValue) {
            const listItem = document.createElement("li");
            listItem.textContent = itemValue;
            itemList.appendChild(listItem);
            feedback.textContent = "";
            itemInput.value = "";
            itemInput.focus();
        } else {
            feedback.textContent = "Nothing entered!";
        }
    });
});
