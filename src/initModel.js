//Promise
const initModel = async () => {
    try{
        const response = await fetch('https://my-json-server.typicode.com/alvintheodora/react-crud-localstorage/data');
            // .then(function(response){
            //     if (response.status !== 200) {
            //         console.log('Looks like there was a problem. Status Code: ' +
            //           response.status);
            //         return;
            //       }
            //     response.json().then(function(data) {
            //         app.data.add(data);
            //         //return new Backbone.Collection(data);
            //       });
            // })
            // .catch(function(err) {
            //     console.log('Fetch Error :-S', err);
            //   });;
        let json;
        //console.log(await response.status); 
        if( await response.status === 404){
            json = [];
       }else{
            json = response.json();
       }
       //console.log(await json)
      
        return new Backbone.Collection(await json);
    }catch(err){
        console.log('Fetch data error');
        return ;
    }

} 

export default initModel; 