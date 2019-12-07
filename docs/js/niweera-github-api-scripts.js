get100Users = async cursor => {
  const response = await fetch("user_list.txt");
  const text = await response.text();
  const lines = text.split("\n");

  const usernames = lines.map(line => {
    return line.split("@").slice(-1)[0];
  });
  let first100;
  let Key = 0;

  switch (cursor) {
    case 1:
      first100 = usernames.slice(100, 200);
      Key = 100;
      break;

    case 2:
      first100 = usernames.slice(200, 300);
      Key = 200;
      break;
    case 3:
      first100 = usernames.slice(300, 400);
      Key = 300;
      break;
    case 4:
      first100 = usernames.slice(400, 500);
      Key = 400;
      break;
    case 5:
      first100 = usernames.slice(500, 600);
      Key = 500;
      break;
    case 6:
      first100 = usernames.slice(600, 700);
      Key = 600;
      break;
    case 7:
      first100 = usernames.slice(700, 800);
      Key = 700;
      break;
    case 8:
      first100 = usernames.slice(800, 900);
      Key = 800;
      break;
    case 9:
      first100 = usernames.slice(900, 1000);
      Key = 900;
      break;

    default:
      first100 = usernames.slice(0, 100);
      Key = 0;
      break;
  }

  let pagination = document.getElementById(`pagination-${cursor}`);
  pagination.className = "page-item active";

  let pageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== cursor);

  pageArray.forEach(page => {
    let paginationInactive = document.getElementById(`pagination-${page}`);
    paginationInactive.className = "page-item";
  });

  const ul = document.getElementById("user-list");
  ul.innerHTML = "";
  first100.forEach((username, key) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let div = document.createElement("div");
    div.className = "image-parent";
    let img = document.createElement("img");
    img.src = `https://avatars.githubusercontent.com/${username}`;
    img.className = "rounded-circle  img-thumbnail";
    img.alt = username;
    img.style = "width: 60px;";
    div.appendChild(img);
    let anchor = document.createElement("a");
    anchor.href = `https://github.com/${username}`;
    anchor.target = "_blank";
    anchor.appendChild(document.createTextNode(`${Key + key + 1} ${username}`));
    li.appendChild(anchor);
    li.appendChild(div);
    ul.appendChild(li);
  });
};

get100Users(0);
