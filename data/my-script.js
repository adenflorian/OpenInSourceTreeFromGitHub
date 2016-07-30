var repoUrl = $(".clone-options > .input-group > .js-url-field").attr("value");
var repoName = $("meta[property='og:title']").attr("content");
var classes = "btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline btn-block";
var ariaLabel = "Clone " + repoName + " to your computer and open it in SourceTree.";
var innerText = "Open in SourceTree";
var href = "sourcetree://cloneRepo/" + repoUrl;

$(".get-repo-modal > .mt-2").append($("<a>", { href: href, class: classes, 'aria-label': ariaLabel }).text(innerText));