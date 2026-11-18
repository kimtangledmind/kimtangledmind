// Das Forum (Giscus / GitHub Discussions) wird erst nach Klick geladen.
// Die Werte unten bekommst du auf https://giscus.app (siehe Anleitung).
var GISCUS = {
  repo: "kimtangledmind/kimtangledmind.github.io",
  repoId: "R_kgDOVnbgfQ",
  category: "General",
  categoryId: "DIC_kwDOVnbgfc4DLSX1"
};

document.getElementById("forum-laden").addEventListener("click", function () {
  var s = document.createElement("script");
  s.src = "https://giscus.app/client.js";
  s.async = true;
  s.crossOrigin = "anonymous";
  s.setAttribute("data-repo", GISCUS.repo);
  s.setAttribute("data-repo-id", GISCUS.repoId);
  s.setAttribute("data-category", GISCUS.category);
  s.setAttribute("data-category-id", GISCUS.categoryId);
  s.setAttribute("data-mapping", "pathname");
  s.setAttribute("data-reactions-enabled", "0");
  s.setAttribute("data-input-position", "top");
  s.setAttribute("data-theme", "light");
  s.setAttribute("data-lang", "de");
  document.getElementById("forum-inhalt").appendChild(s);
  document.getElementById("forum-start").hidden = true;
});
