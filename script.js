if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((reg) => {
    console.log("Service worker registered.");
  });
}

window.addEventListener("load", () => {
  let notificationPermission = false;

  const askPermissionButton = document.querySelector("#askPermissionButton");

  askPermissionButton.addEventListener("click", async () => {
    const answer = await Notification.requestPermission();
    if (answer == "granted") {
      notificationPermission = true;
      console.log("notification permission Granted");
    } else if (answer == "denied") {
      console.log("Notification : user denied notification");
    } else {
      // default
      console.log("Notification: user decline to answer");
    }
    showNotificationButton.addEventListener("click", () => {
      if (!notificationPermission) {
        console.log("we do not have permission to show notification");
        return;
      }
      const options = {
        body: "It's time to study!!",
        icon: "./img/icon-512.png",
      };
      let notif = new Notification("hello", options);
      notif.addEventListener("show", () => {
        console.log("show notification");
      });
      notif.addEventListener("click", () => {
        console.log("user clicked on notification");
      });
    });
  });
});
