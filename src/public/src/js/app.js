var App

;(function(){
  function _App () {
    var self = this
    // Configure bower_components path
    requirejs.config({
      paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'vue': '../bower_components/vue/dist/vue.min',
        'notify-me': '../bower_components/notify.me/dist/js/notify-me',
        'material-design': '../bower_components/material-design-lite/material.min'
      }
    })

    // load modules
    requirejs([
      'vue',
      'jquery',
      'material-design'
    ], function(v, jq, md){
      self.Vue = v
      requirejs([
        'notify-me',
        'modules'
      ], function(n, m){
        App.Modules = m
      })
    })
  }

  App = new _App()
})()
