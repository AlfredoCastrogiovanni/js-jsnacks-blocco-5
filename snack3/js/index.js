
const browser = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram"],
    "activeTab": 0
}

const socialList = ["Facebook", "Instagram"];

browser.tab.forEach((element, index, array) => {
    if(socialList.includes(element)) {
        array.splice(index, 1);
        index == browser.activeTab ? browser.activeTab++ : index;
    }
});

console.log(browser);