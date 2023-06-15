var page = 1
function openChapter(filename, n) {
    page = n
    fetch(filename)
        .then((res) => res.text())
        .then((text) => {
            document.getElementById('content').innerHTML = marked.parse(text);
            renderMathInElement(document.getElementById('content'),
            {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "\\[", right: "\\]", display: true},
                    {left: "$", right: "$", display: false},
                    {left: "\\(", right: "\\)", display: false}
                ]
            });
        })
        .catch((e) => console.error(e));
}

function openChapterNext() {
    page += page >= 32 ? 0 : 1
    openChapter('physics/' + page + '.MD', page)
}
function openChapterPrevious() {
    page -= page <= 1 ? 0 : 1
    openChapter('physics/' + page + '.MD', page)
}