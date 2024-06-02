function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('.details-container').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelectorAll('.color-container').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelectorAll('a').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelectorAll('.btn').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelectorAll('.icon').forEach(el => el.classList.toggle('dark-mode'));
  }
