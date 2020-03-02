
function displayDataInMyPage() {
        console.log(data_as_an_object);
        console.log(data_as_an_object.main.temp_min);
        console.log(data_as_an_object.sys.country);

        var description = document.getElementById("description");
        description.innerHTML = data_as_an_object.weather[0].description;

        var temp_min = document.getElementById("temp_min");
        temp_min.innerHTML = data_as_an_object.main.temp_min;

        var country = document.getElementById("country");
        country.innerHTML = data_as_an_object.sys.country;

}

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
        if (this.readyState == 4 && this.status == 200) {
            
            // function to be run upon receiving a response
            the_response = api_request.responseText; // response = data
            // displayResults(the_response);
            console.log(typeof the_response);

            // THE RESPONSE YOU GET BACK IS OF STRING TYPE
            // WE NEED TO CONVERT IT TO AN OBJECT --> using JSON.parse()
            // EXTRA NOTE - BE SURE TO ORGANIZE DATA FROM API PROPERLY SO YOU CAN REFER CORRECTLY
            data_as_an_object = JSON.parse(the_response);
            
            displayDataInMyPage (data_as_an_object);

        }
        
        else {

            // function to be called upon an error response
            console.log("This stuff is not working")
    }
    };

    // UNDERSTAND THE FOLLOWING
    var endpoint = "https://api.openweathermap.org/data/2.5/weather?";         // who (www.example.com) - what server
    var query = "q=" + user_input;                                    // what data do you want
    var key = "&appid=7816d9f235c88adc096427a68ca872f2";         //key to identify yourself to the server : who is asking for data?
    var the_url = endpoint + query + key;                        // ELEMENTS FOR ALL API CALLS (maybe not key if api is public)
    
    api_request.open ("GET", the_url, true); // ADMIT "GET" AND "true"
    api_request.send()
    
}

