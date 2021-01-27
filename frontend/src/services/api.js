const port = '5001';
const URL = `https://localhost:${port}/api/classifieds`;

export async function getClassifieds() {
    const response = await fetch(URL);
    const classifieds = await response.json();
    return classifieds;
}