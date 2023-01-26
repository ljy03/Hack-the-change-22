function setUpTab () {
    document.querySelectorAll(".tabs__content").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabsToActivate = tabsContainer.querySelectorAll('.tab__content[data-tab= "${tabNumber}"]')
        })
    })
}