
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
    endpoint = "api.openweathermap.org/data/2.5/weather?";         // who (www.example.com) - what server
    query = "q={city name}";                                    // what data do you want
    key = "&appid=7816d9f235c88adc096427a68ca872f2";         //key to identify yourself to the server : who is asking for data?
    the_url = endpoint + query + key                        // ELEMENTS FOR ALL API CALLS (maybe not key if api is public)
    api_request.open ("GET", the_url, true); // ADMIT "GET" AND "true"
    api_request.send()
    
}

