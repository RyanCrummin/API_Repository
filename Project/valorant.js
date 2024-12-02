// Define the API URL
const apiUrl = 'https://valorant-api.com/v1/weapons';

// Make a GET request

async function Gritty(){
    try{
        const response = await fetch(apiUrl);
        const result  = await response.json();
        console.log(result);

    //  result.data.forEach(element => {
    //    console.log(element.displayName);
    // });
    }
    catch{
        console.error(error);
        
    }
}

Gritty();