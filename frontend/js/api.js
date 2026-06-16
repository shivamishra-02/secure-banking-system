const API_URL =
"http://localhost:5000/api";


async function apiCall(
url,
method="GET",
data=null
){


let options={

method,

headers:{
"Content-Type":"application/json"
}

}



if(data)
options.body =
JSON.stringify(data);



let response =
await fetch(
API_URL+url,
options
);


return response.json();


}