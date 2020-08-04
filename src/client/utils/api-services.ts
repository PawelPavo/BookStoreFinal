export let Token: string = localStorage.getItem('token') || null

export const setStorage = (token: string, role: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
}

export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {

    const headers: any = {
        'Content-Type': 'application/json'
    }
    if (Token) {
        headers['Authorization'] = `Bearer ${Token}`
    }
    try {
        const res = await fetch(uri, {
            method,
            headers,
            body: JSON.stringify(body)

        });
        if (res.ok) {
            return <T>(await res.json());
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return 'Server Error API Services'
    }
}

