function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    
    // Determine which parts to show
    if (viewId === 'main') {
        document.getElementById('main-header').classList.remove('hidden');
        document.getElementById('main-view').classList.remove('hidden');
        document.getElementById('back-nav').classList.add('hidden');
    } else {
        document.getElementById(viewId).classList.remove('hidden');
        document.getElementById('back-nav').classList.remove('hidden');
    }
    
    // Scroll to top
    window.scrollTo(0,0);
}

// Ensure lab initializes to main view
window.onload = () => {
    showView('main');
    console.log("Touchstone Lab v3.0: All views loaded.");
};