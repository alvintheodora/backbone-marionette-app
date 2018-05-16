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
        async showAuthors(){            
            let collection = await app.data;          
            app.showViewMain(new AuthorsView({collection: collection}));    
        },
        async showAuthor(id){
            let collection = await app.data;     
            let model = collection.find((data)=>{              
                return data.id==id;
            }); 
            app.showViewMain(new AuthorView({model: model}));
        }
    };

    return {appRoutes, controller}
}