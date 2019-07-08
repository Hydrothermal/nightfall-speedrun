// 2d array of skill coordinates (top left origin for each box)
const skills = [
    // jokanur diggings
    [315, 1439],

    // kamadan
    [1170, 1485],
    [1170, 1631],
];

document.addEventListener("DOMContentLoaded", () => {
    skills.forEach(([x, y]) => {
        document.body.innerHTML += `<div class="skill-box" style="top: ${y}px; left: ${x}px;"></div>`;
    });
});

document.addEventListener("click", () => {
    let target = event.target;

    if(target.classList.contains("skill-box")) {
        if(target.classList.contains("active")) {
            target.classList.remove("active");
        } else {
            target.classList.add("active");
        }
    }
});