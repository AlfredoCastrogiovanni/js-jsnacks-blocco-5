
const browser = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram"],
    "activeTab": 0
}

const socialList = ["Facebook", "Instagram"];

browser.tab.forEach((element, index, array) => {
    socialList.includes(element) ? array.splice(index, 1) : 0;
    console.log(array);
});

console.log(browser);