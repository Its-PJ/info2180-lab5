window.addEventListener('load', ()=>{

    let myURL;
    
    let results = document.querySelector("div#result");
    document.querySelector("#lookup").addEventListener("click", (event)=>{
        event.preventDefault();
        let inputValue = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        myURL = `http://localhost/info2180-lab5/world.php?country= ${inputValue}`;
        fetchCall();
    });

    document.querySelector("#cities").addEventListener("click", (event)=>{
        event.preventDefault();
        let inputValue = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        myURL = `http://localhost/info2180-lab5/world.php?country= ${inputValue}&context=allcities`;
        fetchCall();
    });

    let fetchCall = () =>{
        fetch(myURL, {method : 'GET'})
        .then(resp => resp.text())
        .then(info => {
            results.innerHTML = '';
            results.innerHTML = info;
        })
    }    
});


