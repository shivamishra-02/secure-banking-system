// Check authentication

const token = localStorage.getItem("token");


if(!token){

    window.location.href = "login.html";

}


// Fetch user dashboard data

async function loadDashboard(){


    try{


        const response = await fetch(
            "http://localhost:5000/api/accounts/details",
            {

                method:"GET",

                headers:{

                    "Authorization":`Bearer ${token}`

                }

            }
        );


        const data = await response.json();


        document.getElementById("balance").innerText =
        "₹ " + data.balance;


        document.getElementById("account").innerText =
        data.accountNumber;



    }

    catch(error){

        console.log(error);

    }


}


// Logout

function logout(){


    localStorage.removeItem("token");

    window.location.href="login.html";

}



loadDashboard();