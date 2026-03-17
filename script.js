let count = 0;

function increaseCount() {
    count = count + 1;
    document.getElementById("count").innerText = count;
}

function decreaseCount() {
    count = count - 1;
    document.getElementById("count").innerText = count;
}

function resetCount() {
    count = 0;
    document.getElementById("count").innerText = count;
}