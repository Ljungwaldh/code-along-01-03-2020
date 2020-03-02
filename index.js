
function search () {


    // GETTING USER INPUT
    var user_input = document.getElementById("user_input").value;
    //var query = $(#user_input).val() This is jQuery version of above
    console.log(user_input);

    // CALLING MY API

    // Building the request object
    // ADMIT THE FOLLOWING
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function() {
        if (this.readystate == 4 && this-status == 200) {
            
            // function to be run upon receiving a response
            displayResults(api_request.responseText);
        } else (

            // function to be called upon an error response
            console.log("This stuff is not working");
        )
    };

    // UNDERSTAND THE FOLLOWING
    endpoint = // who (www.example.com) - what server
    query = // what data do you want
    the_url = // who (www.example.com) + what (query)
    api_request.open ("GET", the_url, true); // ADMIT "GET" AND "true"
    api_request.send()
    
}

