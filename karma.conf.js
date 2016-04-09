module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/@angular/router/angular1/angular_1_router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app.js',
      '*.js',
    ],
    exclude:[
        "server.js",
        "karma.conf.js"
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            ],


  });
};