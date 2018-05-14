import $ from 'jquery';
import _ from 'underscore';
import backbone from 'backbone';


var SecondView = Backbone.View.extend({
    el: $('.blogs-list'),    
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(_.template($('.second-view').html()));
    }
});

var ThirdView = Backbone.View.extend({
    el: $('.blogs-list'),    
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(_.template($('.third-view').html()));
    }
});


///////////////////ROUTER/////////////////////////////
var Router = Backbone.Router.extend({
    
    routes: {
        '': 'view3',     
        'page2': 'view2',
        'page3': 'view3'
    },   
    view2: () => {
        new SecondView();
    },
    view3: () => {
        new ThirdView();
    }
});
var router = new Router();
Backbone.history.start({pushState: true});

$('body').on('click', 'a[href^="/"]', function(e){
    e.preventDefault();
    router.navigate($(this).attr('href'), {trigger: true});
  });