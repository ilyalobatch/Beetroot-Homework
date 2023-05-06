const sidebar = document.querySelector('.lightboard-sidebar')
const sidebarToggleBtn = document.querySelector('.lightboard-sidebar__toggle')

if (sidebar && sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('lightboard-sidebar--collapsed')
  })
}