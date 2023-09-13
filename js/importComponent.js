function showComponent(file, location) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById(location).innerHTML += xhr.responseText;

      if (location === "slide") {
        LoadSlide();
      }

      if (location === "banner_hotword") {
        showBannerHotWord();
      }

      if (location === "categorys") {
        showCategory();
      }

      if (location === "products") {
        HandelProduct();
      }
    }
  };

  xhr.send();
}
