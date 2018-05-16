import AuthorsView from '../views/AuthorsView';
import AuthorView from '../views/AuthorView';
import app from '../app';

export default () => {
    let appRoutes = {
        '': 'showAuthors',
        'authors(/)': 'showAuthors',
        'authors/:id': 'showAuthor'
    };
    let controller = {
        showAuthors(){            
            let collection = app.data;        
            console.log('showauthors', collection);  
            app.showViewMain(new AuthorsView({collection: collection}));    
        },
        showAuthor(id){
            let collection = app.data;     
            let model = collection.find((data)=>{              
                return data.id==id;
            }); 
            app.showViewMain(new AuthorView({model: model}));
        }
    };

    return {appRoutes, controller}
}