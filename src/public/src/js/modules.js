define(function (require, exports, module) {
  function Modules () {
    var self = this
    self.vue = new App.Vue({
      el: 'body',
      data: {
        modules: []
      }
    })

    self.getModulesList(function(list){
      self.vue.$data.modules = list
    })
  }

  Modules.prototype.getModulesList = function(cb){
    $.ajax({
      type: 'get',
      url: '/modules',
      dataType: 'json',
      success: function (data) {
        if (data.err) {
          $.notify.error({
            title: 'Error',
            text: data.err,
            duration: 10
          })
          cb()
        } else {
          cb(data.data)
        }
      }
    })
  }

  return new Modules()
})
