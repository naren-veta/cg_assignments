function enterValue(field) {
	var helparea = document.getElementById("helptext");
	helparea.value = "";
	helparea.value = field;
}

function clearHelp() {
	document.getElementById("helptext").value = "";
}

function validateForm() {
	let name_text_element = document.getElementById("cust_name");
    let email_text_element = document.getElementById("cust_email");
    let topping_boxes = document.getElementById("toppingsdiv").getElementsByTagName("input")
	let addr_element=document.getElementById("addr");
    let name = name_text_element.value;
	if (name.length <= 0) {
		alertFocus(name_text_element, "Enter Valid Name");
        return;
	}
	let email = email_text_element.value;

	if (email.length <= 0 || !email.includes("@"))
		{alertFocus(email_text_element, "Enter valid Email");
        return;
    }

    let address=addr_element.value; 
        if(address.length<=0){
        alertFocus(addr_element,"Address is required");
        return;
    }

    let toppings=[];
    
    for(let i=0; i<topping_boxes.length;i++){
        if(topping_boxes[i].checked)
        {
            toppings.push(topping_boxes[i].value)
        }
    }
    
    window.alert("Data Validated...Click Show Summary to view Order details");
    
    document.getElementById("summary").disabled=false;
}


function alertFocus(element, msg) {
	window.alert(msg);
	element.focus();
    
}




function showSummary(){
    
    let c_name = document.getElementById("cust_name").value;
    let c_email = document.getElementById("cust_email").value;
    let c_address=document.getElementById("addr").value; 
    let topping_boxes = document.getElementById("toppingsdiv").getElementsByTagName("input")
    let toppings=[];
    
    for(let i=0; i<topping_boxes.length;i++){
        if(topping_boxes[i].checked)
        {
            toppings.push(topping_boxes[i].value)
        }
    }
    let delivery_choices= document.getElementsByName("serve");
    let delivery_method_selected=null;
    let delivery_cost=0;
        for (let i = 0; i < delivery_choices.length; i++) {
            if(delivery_choices[i].checked)
            {
                delivery_method_selected=delivery_choices[i].value;
                if(delivery_choices[i].value=="delivery"){

                    delivery_cost=5;
                }
            }
            
        }
        let tip_element= document.getElementById("tips");
       
       tip_perc=tip_element.options[tip_element.selectedIndex].value;
    let total_toppings_cost= toppings.length*1.5;
    let tip_cost=eval(1.0+(tip_perc/100))
    let total = (10+total_toppings_cost+delivery_cost)*tip_cost;
    document.getElementById("c_name").appendChild(document.createTextNode(c_name))
    document.getElementById("c_email").appendChild(document.createTextNode(c_email))
    document.getElementById("c_addr").appendChild(document.createTextNode(c_address))
    document.getElementById("toppings_selected").appendChild(document.createTextNode(toppings.join(",")));
    document.getElementById("delivery_opted").appendChild(document.createTextNode(delivery_method_selected));
    document.getElementById("total").appendChild(document.createTextNode(total));
    
    var modal = document.getElementById("summary_modal");
    modal.style.display = "block";
    
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    clearSummary()
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    clearSummary()
    
  }
}
}

function clearSummary(){
    var modal = document.getElementById("summary_modal");
    modal.style.display = "none";
    document.getElementById("c_name").removeChild(document.getElementById("c_name").childNodes[0])
    document.getElementById("c_email").removeChild(document.getElementById("c_email").childNodes[0]);
    document.getElementById("c_addr").removeChild(document.getElementById("c_addr").childNodes[0]);
    document.getElementById("toppings_selected").removeChild(document.getElementById("toppings_selected").childNodes[0]);
    document.getElementById("delivery_opted").removeChild(document.getElementById("delivery_opted").childNodes[0]);
    document.getElementById("total").removeChild(document.getElementById("total").childNodes[0]);
    document.getElementById("reset").click();
}