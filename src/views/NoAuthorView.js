import template from './noAuthorView.html';
import _ from 'underscore';
import Mn from 'backbone.marionette';

let NoAuthorView = Mn.View.extend({
    template: _.template(template),
    tagName: 'ul'
});
export default NoAuthorView;