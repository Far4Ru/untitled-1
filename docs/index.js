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
    openChapter('physics/' + page + '.md', page)
}
function openChapterPrevious() {
    page -= page <= 1 ? 0 : 1
    openChapter('physics/' + page + '.md', page)
}

// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;

// function getTouches(evt) {
//   return evt.touches ||             // browser API
//          evt.originalEvent.touches; // jQuery
// }                                                     
                                                                         
// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                
                                                                         
// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                         
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* right swipe */
//             console.log( Math.abs(xDiff))
//             page += page >= 32 || Math.abs(xDiff) < 12 ? 0 : 1
//             openChapter('physics/' + page + '.md', page)
//         } else {
//             /* left swipe */
//             page -= page <= 1 || Math.abs(xDiff) < 12? 0 : 1
//             openChapter('physics/' + page + '.md', page)
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };