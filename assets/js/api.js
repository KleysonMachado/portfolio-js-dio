
async function fetchProfileData() {
    const url = 'https://github.com/KleysonMachado/portfolio-js-dio/tree/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
