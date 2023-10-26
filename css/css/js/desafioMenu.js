window.onhashchange = function (e) {
  const oldURL = e.oldURL.split("#")[1];
  const newURL = e.newURL.split("#")[1];
  console.log(oldURL, newURL);
  const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`);
  const newLink = document.querySelector(`.menu a[href='#${newURL}']`);
  oldLink && oldLink.classList.remove("selected");
  newLink && newLink.classList.add("selected");
};
