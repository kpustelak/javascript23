(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const select = document.getElementById("select");
  const popup = document.getElementById("popup");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    popup.classList.add("show");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        let html =
          "<table><tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr>";
        array.forEach((item) => {
          html +=
            "<tr>" +
            "<td>" +
            item.userId +
            "</td>" +
            "<td>" +
            item.id +
            "</td>" +
            "<td class='title'>" +
            item.title +
            "</td>" +
            "<td class='body'>" +
            item.body +
            "</td>" +
            "</tr>";
        });
        html += "</table>";
        setTimeout(() => {
          answer.innerHTML = html;
          popup.classList.remove("show");
        }, 2000);
      });
  });

  cw2.addEventListener("click", function () {
    popup.classList.add("show");

    fetch("https://jsonplaceholder.typicode.com/posts/" + select.value)
      .then((response) => response.json())
      .then((item) => {
        setTimeout(() => {
          console.log(item);
          popup.classList.remove("show");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        popup.classList.remove("show");
      });
  });

  cw3.addEventListener("click", function () {
    popup.classList.add("show");

    fetch("https://6ae5dcc3877d34ccafc27f0b.mockapi.io/zajecia2_data/users")
      .then((response) => response.json())
      .then((array) => {
        let html = "<ul>";
        array.forEach((item) => {
          html +=
            "<li class='listUser'>" +
            "<img src='" +
            item.avatar +
            "' alt='Avatar' />" +
            "<div>" +
            item.name +
            "</div>" +
            "</li>";
        });
        html += "</ul>";

        setTimeout(() => {
          answer.innerHTML = html;
          popup.classList.remove("show");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        popup.classList.remove("show");
      });
  });
})();
