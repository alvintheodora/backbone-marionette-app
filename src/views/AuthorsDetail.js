import _ from 'underscore';
import Mn from 'backbone.marionette';
import AuthorDetail from './AuthorDetail';
import NoAuthorView from './NoAuthorView';


let AuthorsDetail = Mn.CollectionView.extend({
    childView: AuthorDetail,
    emptyView: NoAuthorView,
    filter: function (child, index, collection) {//to filter collection
        return child.get('id')==this.id;
      },
});
export default AuthorsDetail;