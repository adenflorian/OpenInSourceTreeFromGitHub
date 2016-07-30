var repoUrl = $(".clone-options > .input-group > .js-url-field").attr("value");
var repoName = $("meta[property='og:title']").attr("content");

$(".get-repo-modal > .mt-2").append('<a href="sourcetree://cloneRepo/'+repoUrl+'" class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline btn-block" aria-label="Clone '+repoName+' to your computer and open it in SourceTree.">Open in SourceTree</a>');
