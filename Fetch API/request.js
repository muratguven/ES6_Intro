class Request {

    // Fetch Api ve Promise ile Rest Api bağlantısı ( GET METHOD)
    get(url){
        return new Promise(function(resolve,reject){
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
        
    }

}


const getRequest = new Request();
getRequest.get("https://jsonplaceholder.typicode.com/albums").then(response=>console.log(response));

