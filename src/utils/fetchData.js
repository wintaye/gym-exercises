export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "5a5ba09dfamshaddfe41d4399abcp14fc4djsnd8d32d6f9592",
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}