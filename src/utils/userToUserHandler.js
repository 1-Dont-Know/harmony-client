const url = import.meta.env.VITE_USER_TO_USER_SERVER_ORIGIN;

export async function loadFriendsList() {
  try {
    const response = await fetch(`${url}/loadFriendsList`, {
      method: "GET",
      credentials: "include"
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`
    };
  }
}

export async function deleteFriend(email) {
  try {
    const response = await fetch(`${url}/removeFriend`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: { email }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`
    };
  }
}
