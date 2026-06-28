export interface ReasonResponse {
    reason: string;
}

const API_BASE = 'http://localhost:8000/api/'
const YES_API_URL = API_BASE + '/yes';
const NO_API_URL = API_BASE + '/no';

// Call either yes or no API based on the input field
export async function getReason(yes: boolean): Promise<ReasonResponse> {
    try {
        const res = await fetch(yes ? YES_API_URL : NO_API_URL);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    }
    catch (error) {
        console.error("API call failed!", error);
        throw error;
    }
}