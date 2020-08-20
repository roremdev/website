const expand = (event) => {
  let header = document.getElementsByClassName("header")[0];
  if (header.classList.contains("header-expand")) {
    header.classList.remove("header-expand");
    document.getElementsByClassName("icon")[0].classList.add("icon-show");
    document.getElementsByClassName("icon")[1].classList.remove("icon-show");

  } else {
    header.classList.add("header-expand");
    document.getElementsByClassName("icon")[0].classList.remove("icon-show");
    document.getElementsByClassName("icon")[1].classList.add("icon-show");
  }
};

for (let item of document.getElementsByClassName("icon"))
  item.addEventListener("click", expand);