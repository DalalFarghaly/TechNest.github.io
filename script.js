// ============================================================
// CONFIGURATION - EDIT THESE VALUES
// ============================================================

// STEP 1: Get your Google Apps Script Web App URL
// Go to: Google Sheets > Extensions > Apps Script
// Deploy as Web App and copy the URL here
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzxUEWpO1qqzswYVwfq1UpQ2H0MV4LkLmweI2u2VxnAXFovU5Kq9KxfLUO1mVdFE-D/exec"; // PASTE YOUR URL HERE

// STEP 2: Add your free lesson video URL (YouTube/Vimeo embed)
const FREE_LESSON_VIDEO_URL = ""; // e.g., "https://www.youtube.com/embed/VIDEO_ID"

// ============================================================
// GOOGLE SHEETS CONNECTION
// ============================================================

/**
 * Submits form data to Google Sheets via Apps Script Web App
 * @param {Object} formData - Contains name, email, phone fields
 * @returns {Promise} - Resolves when submission is complete
 */
async function submitToGoogleSheets(formData) {
    // Check if URL is configured
    if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error('Google Apps Script URL not configured. Please set GOOGLE_APPS_SCRIPT_URL in script.js');
    }

    try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for cross-origin requests to Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Note: With 'no-cors' mode, we can't read the response
        // but the request will still be sent successfully
        return { success: true };
        
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        throw error;
    }
}

// ============================================================
// FORM HANDLING
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) {
        console.warn('Registration form not found on page');
        return;
    }

    // Add submit event listener
    form.addEventListener('submit', handleFormSubmit);

    /**
     * Handles form submission
     * @param {Event} e - Form submit event
     */
    async function handleFormSubmit(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Validate inputs
        if (!validateForm(name, email)) {
            return;
        }

        // Prepare data for Google Sheets
        const formData = {
            name: name,
            email: email,
            phone: phone || 'Not provided',
            timestamp: new Date().toISOString(),
            source: 'TechNest Website'
        };

        // Show loading state
        showMessage('⏳ Submitting... Please wait.', 'loading');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';

        try {
            // Send data to Google Sheets
            await submitToGoogleSheets(formData);
            
            // Success message
            showMessage(
                '✅ Thank you! We\'ll reach out to you soon.\n' +
                'شكراً! سنتواصل معك قريباً.',
                'success'
            );
            
            // Reset form
            form.reset();

        } catch (error) {
            // Error message
            showMessage(
                '❌ Something went wrong. Please try again or contact us directly at contact@technest.com',
                'error'
            );
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }

    /**
     * Validates form inputs
     * @param {string} name - User's full name
     * @param {string} email - User's email address
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateForm(name, email) {
        if (!name) {
            showMessage('Please enter your full name.', 'error');
            return false;
        }

        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return false;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address (e.g., name@example.com).', 'error');
            return false;
        }

        return true;
    }

    /**
     * Validates email format
     * @param {string} email - Email to validate
     * @returns {boolean} - True if valid email format
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Displays message to user
     * @param {string} text - Message text
     * @param {string} type - Message type: 'success', 'error', 'loading'
     */
    function showMessage(text, type) {
        if (!messageDiv) return;
        
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
        messageDiv.style.whiteSpace = 'pre-line'; // For multi-line messages

        // Auto-hide success messages after 6 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 6000);
        }

        // Auto-hide loading messages after 10 seconds (safety)
        if (type === 'loading') {
            setTimeout(() => {
                if (messageDiv.className === 'loading') {
                    messageDiv.style.display = 'none';
                }
            }, 10000);
        }
    }
});

// ============================================================
// FREE LESSON VIDEO PLAYER
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playPlaceholderBtn');
    const watchBtn = document.getElementById('watchFreeLessonBtn');
    const frame = document.getElementById('freeLessonFrame');
    const placeholder = document.getElementById('videoPlaceholder');

    if (!frame || !placeholder) {
        console.warn('Video player elements not found on page');
        return;
    }

    // Load video when play button is clicked
    if (playBtn) {
        playBtn.addEventListener('click', loadFreeLesson);
    }

    // Scroll to video and load when "Watch Free Lesson" button is clicked
    if (watchBtn) {
        watchBtn.addEventListener('click', function() {
            document.getElementById('free-trial').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Load video after scroll animation (300ms delay)
            setTimeout(loadFreeLesson, 300);
        });
    }

    /**
     * Loads the free lesson video into the iframe
     */
    function loadFreeLesson() {
        // Check if video URL is configured
        if (!FREE_LESSON_VIDEO_URL) {
            placeholder.querySelector('.ph-sub').textContent = 
                '⚠️ No video URL set. Please add FREE_LESSON_VIDEO_URL in script.js';
            return;
        }

        // Check if video is already loaded
        if (frame.querySelector('iframe')) {
            return; // Video already loaded
        }

        // Create and add iframe
        const iframe = document.createElement('iframe');
        iframe.src = FREE_LESSON_VIDEO_URL;
        iframe.title = 'TechNest Free Lesson';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        
        // Clear frame and add iframe
        frame.innerHTML = '';
        frame.appendChild(iframe);
    }
});

// ============================================================
// ALTERNATIVE METHODS (Commented Out)
// ============================================================

/**
 * METHOD 1: Direct Google Form Embed
 * Uncomment this to replace the form with an embedded Google Form
 */
/*
function embedGoogleForm() {
    const formContainer = document.querySelector('.register-box');
    if (formContainer) {
        const googleFormEmbedURL = 'YOUR_GOOGLE_FORM_EMBED_URL';
        formContainer.innerHTML = `
            <iframe src="${googleFormEmbedURL}" 
                    width="100%" 
                    height="700" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                Loading…
            </iframe>
        `;
    }
}
// Uncomment to use:
// document.addEventListener('DOMContentLoaded', embedGoogleForm);
*/

/**
 * METHOD 2: Pre-filled Google Form Link
 * Opens a pre-filled Google Form in a new tab
 */
/*
function openPrefilledGoogleForm(data) {
    const baseURL = 'YOUR_GOOGLE_FORM_URL';
    const params = new URLSearchParams({
        'entry.123456789': data.name,  // Replace with your form entry IDs
        'entry.987654321': data.email,
        'entry.456789123': data.phone
    });
    window.open(`${baseURL}?${params}`, '_blank');
}
*/

// ============================================================
// GOOGLE APPS SCRIPT BACKEND CODE
// Copy and paste this into Google Apps Script
// ============================================================

/*
// ============================================================
// GOOGLE APPS SCRIPT - Backend Code
// ============================================================
// INSTRUCTIONS:
// 1. Open your Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Delete default code and paste this
// 4. Click Deploy > New Deployment > Web App
// 5. Set "Execute as" to "Me" and "Who has access" to "Anyone"
// 6. Copy the Web App URL and paste it in GOOGLE_APPS_SCRIPT_URL above
// ============================================================

function doPost(e) {
    try {
        // Parse incoming data
        const data = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        
        // Add headers if sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp',
                'Full Name',
                'Email',
                'Phone',
                'Submission Date',
                'Source'
            ]);
        }
        
        // Append data to sheet
        sheet.appendRow([
            new Date().toLocaleString(),
            data.name || '',
            data.email || '',
            data.phone || '',
            data.timestamp || new Date().toISOString(),
            data.source || 'TechNest Website'
        ]);
        
        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({ 
                success: true, 
                message: 'Data saved successfully' 
            }))
            .setMimeType(ContentService.MimeType.JSON);
            
    } catch (error) {
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({ 
                success: false, 
                error: error.toString() 
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Optional: Test function to verify setup
function doGet() {
    return ContentService
        .createTextOutput('Google Apps Script is working!')
        .setMimeType(ContentService.MimeType.TEXT);
}
*/

// ============================================================
// TESTING & DEBUGGING
// ============================================================

/**
 * Test function to verify Google Sheets connection
 * Open browser console and run: testGoogleSheetsConnection()
 */
function testGoogleSheetsConnection() {
    if (!GOOGLE_APPS_SCRIPT_URL) {
        console.error('❌ GOOGLE_APPS_SCRIPT_URL is not set in script.js');
        return;
    }

    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        timestamp: new Date().toISOString(),
        source: 'Test'
    };

    console.log('🔍 Testing connection to:', GOOGLE_APPS_SCRIPT_URL);
    console.log('📤 Sending test data:', testData);

    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
    })
    .then(() => {
        console.log('✅ Test data sent successfully!');
        console.log('📋 Check your Google Sheet for a new row with test data.');
        console.log('🗑️ Remember to delete the test row when done.');
    })
    .catch((error) => {
        console.error('❌ Test failed:', error);
    });
}

// Expose test function globally for console testing
window.testGoogleSheetsConnection = testGoogleSheetsConnection;