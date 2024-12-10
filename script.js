const channelGroupToggles = document.querySelectorAll(
  "[data-channel-group-toggle]"
)
const usersSidebarToggleButton = document.querySelector(
  "[data-users-sidebar-toggle]"
)
const usersSidebar = document.querySelector("[data-users-sidebar]")
const activeToggleItems = document.querySelectorAll("[data-active-toggle]")

activeToggleItems.forEach(toggle => {
  toggle.addEventListener("click", () => {
    console.log(toggle, toggle.dataset.activeToggle)
    ;[...activeToggleItems]
      .filter(t => t.dataset.activeToggle === toggle.dataset.activeToggle)
      .forEach(toggle => toggle.classList.remove("active"))
    toggle.classList.add("active")
  })
})

channelGroupToggles.forEach(channelGroupToggle => {
  channelGroupToggle.addEventListener("click", () => {
    const channelGroup = channelGroupToggle.closest("[data-channel-group]")
    channelGroup.classList.toggle("collapsed")
  })
})

usersSidebarToggleButton.addEventListener("click", () => {
  usersSidebar.classList.toggle("hidden")
})
