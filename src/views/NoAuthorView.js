import template from './noAuthorView.html';
import _ from 'underscore';
import Mn from 'backbone.marionette';
import loaderImage from '../loading.gif';

let NoAuthorView = Mn.View.extend({
    template: _.template(template, {variable: 'data'})({loaderImage}),//to pass data.loaderImage to template
    tagName: 'ul'
}); 
export default NoAuthorView; 

