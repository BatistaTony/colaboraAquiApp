export default () => {
  function fadeInPage() {
    if (!window.AnimationEvent) {
      return;
    }

    var fader = document.getElementById("fader");
    fader.classList.add("fade-out");
  }

  fadeInPage();

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.AnimationEvent) {
      return;
    }

    var anchors = document.getElementsByTagName("a");

    for (var idx = 0; idx < anchors.length; idx += 1) {
      if (
        anchors[idx].hostname !== window.location.hostname ||
        anchors[idx].pathname === window.location.pathname
      ) {
        continue;
      }

      anchors[idx].addEventListener("click", function (event: any) {
        var fader = document.getElementById("fader"),
          anchor = event.currentTarget;

        var listener = function () {
          window.location = anchor.href;
          fader.removeEventListener("animationend", listener);
        };
        fader.addEventListener("animationend", listener);

        event.preventDefault();

        fader.classList.add("fadeIn");
      });
    }
  });

  window.addEventListener("pageshow", function (event: PageTransitionEvent) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById("fader");
    fader.classList.remove("fadeIn");
  });
};