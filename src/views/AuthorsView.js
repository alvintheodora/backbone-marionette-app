import _ from 'underscore';
import Mn from 'backbone.marionette';
import AuthorView from './AuthorView';
import NoAuthorView from './NoAuthorView';

let AuthorsView = Mn.CollectionView.extend({
    childView: AuthorView,
    emptyView: NoAuthorView
});
export default AuthorsView;