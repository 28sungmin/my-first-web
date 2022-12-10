function hanryu() {
    let spanArray = document.getElementsByTagName("span");
    for (let i=0; i<spanArray.length; i++) {
        let span = spanArray[i];
        span.style.color = "red";
    }
}