/* File: regEmailTest.js located src/utils/             */

/**
 * Validates whether input is a properly formatted email address.
 * 
 * @param {any} data - User-provided email input.
 * @returns {number} 1 if valid email, 0 if invalid.
 */
export const regEmailTest = (data) => {
    // Trim whitespace and normalize
    const email = data.trim().toLowerCase();

    /**
     * Practical email validation pattern (RFC 5322-inspired)
     * - Local part: letters, digits, dots, underscores, and hyphens
     * - Domain: allows subdomains
     * - TLD: at least two letters
     * - No consecutive dots or leading/trailing dots
     */
    const emailPattern =
        /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,63}[a-zA-Z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[A-Za-z]{2,}$/i;

    // Step 4: Apply pattern test
    return emailPattern.test(email) ? 1 : 0;
};
