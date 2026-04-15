/**
 * TOUCHSTONE LAB v3.0 - INTEGRATED LOGIC
 * Navigation + Signal Fire Content
 */

// 1. DATA: Define the Signal Fire content
const signalItems = [
    { id: 'signal-1', text: "Identifying systemic gaps in the day job flow." },
    { id: 'signal-2', text: "Filtering Voice Note Feed for signal." },
    { id: 'signal-3', text: "Running the Human Algorithm Diagnostic." }
];

// 2. NAVIGATION: The showView function handles the SPA transitions
function showView(viewId) {
    console.log("Switching to view:", viewId);
    
    const views = document.querySelectorAll('.view');
    const backNav = document.getElementById('back-nav');
    const mainHeader = document.getElementById('main-header');

    // Hide everything first
    views.forEach(v => v.classList.add('hidden'));

    // Show the requested view
    if (viewId === 'main') {
        document.getElementById('main-view').classList.remove('hidden');
        mainHeader.classList.remove('hidden');
        backNav.classList.add('hidden');
    } else {
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.remove('hidden');
            backNav.classList.remove('hidden');
            mainHeader.classList.add('hidden');
        }
    }

    window.scrollTo(0, 0);
}

// 3. CORE: Initialize the site content and events
document.addEventListener('DOMContentLoaded', () => {
    // Inject the Signal Fire text into the dashboard
    signalItems.forEach((item, index) => {
        // This looks for the <p> tag inside your priority items by index
        const pTag = document.querySelectorAll('.priority-item p')[index];
        if (pTag) {
            pTag.innerText = item.text;
        }
    });

    // Start on the main view
    showView('main');
    
    console.log("Sovereign Algorithm: Engaged. Content Loaded.");
});