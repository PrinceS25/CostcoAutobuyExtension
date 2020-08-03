chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://www.instacart.com/store/costco/info?tab=delivery";
    chrome.tabs.create({ url: newURL });
});