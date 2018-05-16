import template from './authorView.html';
import _ from 'underscore';
import Mn from 'backbone.marionette';

let AuthorView = Mn.View.extend({
    template: _.template(template),
    tagName: 'ul'
});
export default AuthorView;