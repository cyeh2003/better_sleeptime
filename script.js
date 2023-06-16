function handleOnClickEvent() {
    let output = document.querySelector(".output");
    output.style.display = "block";

    let hours = document.getElementById("hours");
    hours.innerHTML = "";

    let now = new Date();
    // allow 14 minutes to fall asleep
    now.setMinutes(now.getMinutes() + 14)

    for (let i = 0; i < 6; i++) {
        now.setMinutes(now.getMinutes() + 90);
        hours.innerHTML += now.toLocaleTimeString("en-US", { timeStyle: "short" }) + "<br />";
    }
}