\const login = async (email: string, password: string) => {
  try {
    const response = await fetch('/api/login', { // Replace '/api/login' with your actual endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Handle non-successful responses (e.g., 401 Unauthorized)
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    // Assuming the API returns a token and user info
    console.log('Login successful:', data.user);
    // Store the token (e.g., in localStorage)
    localStorage.setItem('userToken', data.token);
    return data; // Return user data or success status
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error for the calling function to handle
  }
};
