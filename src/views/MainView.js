import template from './main.html';
import _ from 'underscore';
import Mn from 'backbone.marionette';

let MainView = Mn.View.extend({
    template: _.template(template),
    regions: {
        main: '#main'
    }
});
export default MainView;