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


    post(url,data){

        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));

        });
       
    }

}

// Get Test
const req = new Request();
// req.get("https://jsonplaceholder.typicode.com/albums").then(response=>console.log(response));

// Post Test 
req.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"DENEME"}).then(result=>console.log(result));


