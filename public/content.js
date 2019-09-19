function myFunction(){
    var arr = [];

    const x = document.querySelectorAll(".user-details a");
    var i;
    for (i = 0; i < x.length; i++) {
        arr = arr.concat(x[i].innerHTML);
    }
    console.log("arr is  : ", arr);
}

myFunction();


var mutationObserver = new MutationObserver(function() {
    return myFunction();
});

mutationObserver.observe(document.querySelector('body'), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});
