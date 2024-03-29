const listItems = [
  { id: 1, name: "Amin", lastName: "Saeedi Rad" },
  { id: 2, name: "Amir", lastName: "Zehtab" },
  { id: 3, name: "Qadir", lastName: "Yolme" },
  { id: 4, name: "Babak", lastName: "Mohammadi" },
  { id: 5, name: "Hasan", lastName: "Ghahreman Zadeh" },

  { id: 6, name: "Fatemeh ", lastName: "Saeedi Rad" },
  { id: 7, name: "Amir", lastName: "Zehtab" },
  { id: 8, name: "Qadir", lastName: "Yolme" },
  { id: 9, name: "Babak", lastName: "Mohammadi" },
  { id: 10, name: "Masoud", lastName: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", lastName: "Ehsani" },
  { id: 12, name: "Siamak", lastName: "Modiri" },
  { id: 13, name: "Mohsen", lastName: "Ansari" },
  { id: 14, name: "Mehran", lastName: "Ali Pour" },
  { id: 15, name: "Amir Hossein", lastName: "Mahtabi" },

  { id: 16, name: "Hossein", lastName: "Amino" },
  { id: 17, name: "Melika", lastName: "Ehsani" },
  { id: 18, name: "Qadir", lastName: "Yolme" },
  { id: 19, name: "Fatemeh", lastName: "Alilou" },
  { id: 20, name: "Ehsan", lastName: "Tayyebi" },

  { id: 21, name: "Zahra", lastName: "Gholami" },
  { id: 22, name: "Matin", lastName: "Sahebi" },
];

let userListContainer = document.querySelector("#list");
let paginationContainer = document.querySelector("#pagination");

let currentPage = 1;
let rowsCount = 5;

//slice a part of user and put in users list
function displayUsers(listItems, userListContainer, currentPage, rowsCount) {
  userListContainer.innerHTML = "";

  let endIndex = currentPage * rowsCount;
  let startIndex = endIndex - rowsCount;

  let paginatedUser = listItems.slice(startIndex, endIndex);

  paginatedUser.forEach((user) => {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + "" + user.lastName;

    userListContainer.append(userElement);
  });
}

//display buttons according to users
function setupPagination(listItems, paginationContainer, rowsCount) {
  paginationContainer.innerHTML = "";

  //how many page should have
  let pageCount = Math.ceil(listItems.length / rowsCount);

  //creat button element accroding to pageCount
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = btnGenerators(i, listItems);
    paginationContainer.appendChild(btn);
  }

  console.log(pageCount);
}

//page = page number
function btnGenerators(page, listItems) {
  let button = document.createElement("button");
  button.innerHTML = page;
  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;

    displayUsers(listItems, userListContainer, currentPage, rowsCount);
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });
  return button;
}

displayUsers(listItems, userListContainer, currentPage, rowsCount);
setupPagination(listItems, paginationContainer, rowsCount);


