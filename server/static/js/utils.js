
async function verifyRecaptcha() {
    try {
        const token = await grecaptcha.execute('6LdUEyInAAAAAOQWgCQaHuZbzYQAXB_n0YnVZHOT', { action: 'submit' });
        
        const data = {
            token: token
        };

        const response = await fetch('/verify-recaptcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
