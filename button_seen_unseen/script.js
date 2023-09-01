function divSeen() {
    const div = document.getElementById('div1');
    const computedStyle = window.getComputedStyle(div);

    // Toggle the div's display property
    if (computedStyle.display === 'none') {
        div.style.display = 'block'; // Show the div
    } else {
        div.style.display = 'none'; // Hide the div
    }
}