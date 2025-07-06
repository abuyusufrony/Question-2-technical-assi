const userMenuButton = document.getElementById('user-menu-button');
const userDropdown = document.getElementById('user-dropdown');

userMenuButton.addEventListener('click', () => {
    userDropdown.classList.toggle('hidden');
});