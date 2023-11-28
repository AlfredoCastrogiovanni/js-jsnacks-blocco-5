
const browser = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram", "TikTok"],
    "activeTab": 0
}

const socialList = ["Facebook", "Instagram", "TikTok"];

browser.tab.forEach((element, index, array) => {
    socialList.includes(element) ? array.splice(index, 1) : 0;

    if(socialList.includes(element)) {
        array.splice(index, 1);
        index == browser.activeTab ? browser.activeTab++ : index;
    }
});

console.log(browser);