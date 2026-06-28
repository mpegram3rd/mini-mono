export interface ReasonResponse {
    reason: string;
}

const YES_API_URL = '/api/yes';
const NO_API_URL =  '/api/no';

// Call either yes or no API based on the input field
export async function getReason(yes: boolean): Promise<ReasonResponse> {
    const res = await fetch(yes ? YES_API_URL : NO_API_URL);

    if (!res.ok)
        throw new Error(`HTTP error! status: ${res.status}`);

    return await res.json();
}