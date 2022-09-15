let userListUl = document.querySelector("#user-list");

async function getUsers() {
  let res = await fetch("/api/users");
  let { userList } = await res.json();
  for (let user of userList) {
    userListUl.innerHTML += `<li class="list-group-item user-card">${user.name}</li>`;
  }
}

function UserListItem({ name }) {
  return `<li class="list-group-item user-card">${name}</li>`;
}

getUsers();
