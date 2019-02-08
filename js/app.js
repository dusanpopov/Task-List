const itemToAdd = document.querySelector(".itemToAdd");
const addBtn = document.querySelector(".btn--add");
const itemList = document.querySelector(".output--list");

class Item {
  constructor(itemName) {
    this.name = itemName;

    this.create();
  }

  create() {
    let listItem = document.createElement("div");
    listItem.classList.add("output--list__item");

    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("item__name");
    input.value = this.name;
    input.disabled = true;

    let actions = document.createElement("div");
    actions.classList.add("item__actions");

    let updateButton = document.createElement("button");
    updateButton.classList.add("btn--update");
    updateButton.innerText = "Edit";
    updateButton.addEventListener("click", () => this.update(input));

    let removeButton = document.createElement("button");
    removeButton.classList.add("btn--remove");
    removeButton.innerText = "Delete";
    removeButton.addEventListener("click", () => this.remove(listItem));

    actions.appendChild(updateButton);
    actions.appendChild(removeButton);
    listItem.appendChild(input);
    listItem.appendChild(actions);

    itemList.appendChild(listItem);
  }

  update(input) {
    input.disabled = !input.disabled;
    input.focus();
  }

  remove(listItem) {
    listItem.parentNode.removeChild(listItem);
  }
}

addBtn.addEventListener("click", () => newItem());

function newItem() {
  if (itemToAdd.value != "") {
    new Item(itemToAdd.value);
    itemToAdd.value = "";
  }
}

/*const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item {
	constructor (itemName) {
		this.name = itemName;

		this.create();
	}

	update (input) {
		input.disabled = !input.disabled;
	}

	remove (listItem) {
		listItem.parentNode.removeChild(listItem);
	}
}

addButton.addEventListener("click", () => newItem());

function newItem () {
	if (itemToAdd.value != "") {
		new Item(itemToAdd.value);
		itemToAdd.value = "";
	}
}

*/
