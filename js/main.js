function toggleText(event, textID, buttonID) {
    event.preventDefault();
    const moreText = document.getElementById(textID);
    const buttonText = document.getElementById(buttonID);

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        buttonText.textContent = " Read less";
    } else {
        moreText.style.display = "none";
        buttonText.textContent = "...Read more";
    }
}