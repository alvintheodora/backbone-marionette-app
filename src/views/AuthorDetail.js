import template from './authorDetailView.html';
import _ from 'underscore';
import Mn from 'backbone.marionette';

let AuthorDetail = Mn.View.extend({
    template: _.template(template),
    tagName: 'ul'
});
export default AuthorDetail;