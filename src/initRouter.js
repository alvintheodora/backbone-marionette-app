import Mn from 'backbone.marionette';
import _ from 'lodash';
import authors from './routes/authors';

const initRouter = () => {
   let routes = _.merge(authors());

   return new Mn.AppRouter(routes);

} 

export default initRouter; 