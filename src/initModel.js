const initModel = () => {   
        const response = fetch('https://my-json-server.typicode.com/alvintheodora/react-crud-localstorage/data')
            .then(function(response){
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                      response.status);
                    return;
                  }
                response.json().then(function(data) {
                    app.collection.add(data);
                    console.log('iniModel', app.collection);
                    //return new Backbone.Collection(data);
                  });
                
                 
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
              });;
   
        return app.collection;

} 

export default initModel; 