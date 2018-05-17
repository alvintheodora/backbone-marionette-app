import AuthorsView from '../views/AuthorsView';
import AuthorsDetail from '../views/AuthorsDetail';
import AuthorDetail from '../views/AuthorDetail';
import app from '../app';

export default () => {
    let appRoutes = {
        '': 'showAuthors',
        'authors(/)': 'showAuthors',
        'authors/:id': 'showAuthor'
    };
    let controller = {
        showAuthors(){                        
            app.showViewMain(new AuthorsView({collection: app.collection}));    
        },
        showAuthor(id){          
            app.showViewMain(new AuthorsDetail({collection: app.collection,id}));
        }
    };

    return {appRoutes, controller}
}