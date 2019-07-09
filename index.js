// 2d array of skill coordinates (top left origin for each box)
const skills = [
    // jokanur diggings
    [315, 1439],

    // kamadan
    [1170, 1485],
    [1170, 1631],
    
    // realm of torment
    [891, 193],
    [1342, 340],
    [1418, 340],
    [1342, 411],
    [1418, 411],
    [1342, 483],
    [1418, 483],

    // lb 
    [1875, 736],

    // kodash
    [2315, 402],
    [2392, 402],
    [2354, 545],

    // sunspear sanc
    [1698, 1644],
    [1774, 1644],
    [1698, 1714],
    [1774, 1714],
    [1698, 1783],
    [1774, 1783],
    [1431, 1010],
    [1507, 1010],
    [1469, 1088], 
    [1977, 1284],
    [2056, 1284],
    [2018, 1359],

    // ss greathall
    [956, 1302],
    [657, 1343],
    [734, 1343],
    [657, 1413],
    [734, 1413],
    [657, 1484],
    [734, 1484],

    // churrir fields
    [792, 1897],
    [872, 1897],
    [792, 1971],
    [872, 1971],
];

const profs = [
    [1437, 1395],
];

document.addEventListener("DOMContentLoaded", () => {
    skills.forEach(([x, y]) => {
        document.body.innerHTML += `<div class="click-box inactive skill" style="top: ${y}px; left: ${x}px;"></div>`;
    });

    profs.forEach(([x, y]) => {
        document.body.innerHTML += `<div class="click-box inactive prof" style="top: ${y}px; left: ${x}px;"></div>`;
    });
});

document.addEventListener("click", () => {
    let target = event.target;

    if(target.classList.contains("click-box")) {
        if(target.classList.contains("inactive")) {
            target.classList.remove("inactive");
        } else {
            target.classList.add("inactive");
        }
    }
});
