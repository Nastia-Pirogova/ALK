const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", " top: "+(e.pageY -5)+"px; left: "+(e.pageX -5)+"px; ")
});

const cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', e => {
    cursor2.setAttribute("style", " top: "+(e.pageY -5)+"px; left: "+(e.pageX -5)+"px; ")
});
