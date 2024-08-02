function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600'));
    const activeLink = document.querySelector(`[onclick="openTab('${tabName}')"]`);
    activeLink.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
}
// Open default tab

document.addEventListener("DOMContentLoaded", () => {
    openTab('android');
    
    
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
        document.getElementById('mobile-menu').classList.toggle('fixed');
    });
    
    document.getElementById('menu-close').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('mobile-menu').classList.remove('fixed');
    });
});