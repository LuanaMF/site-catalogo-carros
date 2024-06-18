export async function get(endpoint) {
    const response = await fetch(`../api/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}

export async function apiPost(data, endpoint) {
    const response = await fetch(`../api/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function apiPut(data, endpoint) {
    const response = await fetch(`../api/${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}