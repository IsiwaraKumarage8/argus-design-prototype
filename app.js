function toggleDrawer(button) {
    const drawer = button.nextElementSibling;
    drawer.classList.toggle('open');
    button.textContent = drawer.classList.contains('open') ? '[Hide evidence ▲]' : '[Show evidence ▼]';
}