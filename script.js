/**
 * TOUCHSTONE LAB v3.0 - NAVIGATION LOGIC
 */

function showView(viewId) {
    console.log("Switching to view:", viewId);
    
    // 1. Select all elements with the 'view' class
    const views = document.querySelectorAll('.view');
    const backNav = document.getElementById('back-nav');
    const mainHeader = document.getElementById('main-header');

    // 2. Hide everything first
    views.forEach(v => v.classList.add('hidden'));

    // 3. Show the requested view and conditional elements
    if (viewId === 'main') {
        document.getElementById('main-view').classList.remove('hidden');
        mainHeader.classList.remove('hidden');
        backNav.classList.add('hidden');
    } else {
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.remove('hidden');
            backNav.classList.remove('hidden');
            // Keep header hidden for detail views to focus on content
            mainHeader.classList.add('hidden');
        }
    }

    // 4. Scroll to top for a clean transition
    window.scrollTo(0, 0);
}

// Ensure the page starts correctly
document.addEventListener('DOMContentLoaded', () => {
    showView('main');
});