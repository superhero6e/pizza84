pizza_list_array = [];

function getmenu()
	{    
        // Give the appropriate id name as pizza_name
        
        item = document.getElementById("pizza_name").value; 
       
	pizza_list_array.push(item);
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
       }
        //Add push() function to push item into array
        