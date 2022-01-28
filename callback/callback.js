function getData(url, succes, error) {
    let xhr = new XMLHttpRequest();
    
    xhr.onloadstart = function () {
        document.getElementById("button").innerHTML = "Loading...";
    }

    xhr.onreadystatechange = function(){
      if( xhr.readyState == 4) {
        if(xhr.status == 200){
          succes(xhr.response)
        }
        else if(xhr.status == 404){
          error();
        }
      }
    }

    xhr.open('GET', url);
    xhr.send();
  }
  getData('https://jsonplaceholder.typicode.com/users', results => {
    const data = JSON.parse(results)
    let temp=""
    data.forEach(l =>{ 
      for (let i=0; i <15000; i++){
        let date = new Date()
      }
      temp +="<tr>";
      temp +="<th>"+l.id+"</th>";
      temp +="<td>"+l.name+"</td>";
      temp +="<td>"+l.username+"</td>";
      temp +="<td>"+l.email+"</td>";
      temp +="<td>"+l.address.street+", "+l.address.suite+", "+l.address.city+"</td>";
      temp +="<td>"+l.company.name+"</td></tr>";
      console.log(l)
    }
    );
  
    document.getElementById("app").innerHTML=temp;
    }, ()=> {})