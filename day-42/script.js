function timeAgo(date) {

    const oldTime = new Date(date).getTime();

    if (Number.isNaN(oldTime)) {
        return "Invalid date";
    }

    const difference = Date.now() - oldTime;

    if (difference < 0) {
        return "In the future";
    }

    const seconds = Math.floor(difference / 1000);

    if (seconds < 10) {
        return "Just now";
    }

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const days = Math.floor(hours / 24);

   if(days === 1  ) {
        return "Yesterday";
    }

    const weeks = Math.floor(days / 7);

    if (weeks < 4) {
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } 

    const months = Math.floor(weeks / 4);

    if (months < 12) {
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    }

    const years = Math.floor(months / 12);

    return `${years} ${years === 1 ? "year" : "years"} ago`;
}

const dateInput = document.getElementById("dateInput");
const dateOutput = document.getElementById("dateOutput");

const updateTimesButton = document.getElementById("updateTimes");

updateTimesButton.addEventListener("click", update);

function update() {
document.getElementById("time1").textContent = timeAgo(new Date(Date.now() - 9000));

document.getElementById("time2").textContent = timeAgo(new Date(Date.now() - 3600000));

document.getElementById("time3").textContent = timeAgo(new Date(Date.now() - 98888888));

dateOutput.textContent = timeAgo(dateInput.value);
}

update();