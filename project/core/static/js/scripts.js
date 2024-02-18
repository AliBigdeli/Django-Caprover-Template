/*!
 * Start Bootstrap - SB Admin Pro v2.0.3 (https://shop.startbootstrap.com/product/sb-admin-pro)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under SEE_LICENSE (https://github.com/StartBootstrap/sb-admin-pro/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", (event) => {
  // Activate feather
  feather.replace();

  // Enable tooltips globally
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Enable popovers globally
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Activate Bootstrap scrollspy for the sticky nav component
  const stickyNav = document.body.querySelector("#stickyNav");
  if (stickyNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#stickyNav",
      offset: 82,
    });
  }

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sidenav-toggled")
      );
    });
  }

  // Close side navigation when width < LG
  const sidenavContent = document.body.querySelector("#layoutSidenav_content");
  if (sidenavContent) {
    sidenavContent.addEventListener("click", (event) => {
      const BOOTSTRAP_LG_WIDTH = 992;
      if (window.innerWidth >= 992) {
        return;
      }
      if (document.body.classList.contains("sidenav-toggled")) {
        document.body.classList.toggle("sidenav-toggled");
      }
    });
  }

  // Add active state to sidbar nav links
  let activatedPath = window.location.pathname.match(/([\w-]+\.html)/, "$1");

  if (activatedPath) {
    activatedPath = activatedPath[0];
  } else {
    activatedPath = "index.html";
  }

  const targetAnchors = document.body.querySelectorAll(
    '[href="' + activatedPath + '"].nav-link'
  );

  targetAnchors.forEach((targetAnchor) => {
    let parentNode = targetAnchor.parentNode;
    while (parentNode !== null && parentNode !== document.documentElement) {
      if (parentNode.classList.contains("collapse")) {
        parentNode.classList.add("show");
        const parentNavLink = document.body.querySelector(
          '[data-bs-target="#' + parentNode.id + '"]'
        );
        parentNavLink.classList.remove("collapsed");
        parentNavLink.classList.add("active");
      }
      parentNode = parentNode.parentNode;
    }
    targetAnchor.classList.add("active");
  });

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});

function changePageTo(pageNumber) {
  // Get the current URL
  var url = window.location.href;

  // Check if the URL already contains query parameters
  var separator = url.indexOf("?") === -1 ? "?" : "&";

  // Create a URLSearchParams object from the current URL
  var params = new URLSearchParams(window.location.search);

  // Set the 'page' parameter to the incoming pageNumber
  params.set("page", pageNumber);

  // Get the updated query string
  var updatedQueryString = params.toString();

  // Construct the new URL with the updated query string
  var newUrl =
    window.location.origin +
    window.location.pathname +
    "?" +
    updatedQueryString;

  // Navigate to the new URL
  window.location.href = newUrl;
}
