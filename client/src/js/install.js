// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Save the event object for later use
    window.deferredPrompt = event;
    // Make the install button visible
    butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const windowPrompt = window.deferredPrompt;
    if (!windowPrompt) {
        return;
    }
    // Prompt the user to install the PWA
    windowPrompt.prompt();
    // Wait for the user's response
    const choiceResult = await windowPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
    } else {
        console.log('User dismissed the install prompt');
    }
    // Clear the saved event object and hide the install button
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Perform any necessary actions after the app is installed
    console.log('Application installed successfully!');
});
