var gulp = require('gulp');
var inject = require('gulp-inject');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var spawn = require('child_process').spawn;

//here is a list of all the script files we want to include in our index.html. they will show up in this order.
var scriptPaths = [
    //third party libs that we need
    "node_modules/jquery-ui-bundle/external/jquery/jquery.js",
    "node_modules/jquery-ui-bundle/jquery-ui.js",
    "node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js",
    "node_modules/angular/angular.js",
    "node_modules/@angular/router/angular1/angular_1_router.js",
    
    //our own things that need to go in a specific order
    "date-time-picker-directive.js",
    "app.js",
    
    //everything else
    "*.js",
    
    //but  not these ones
    "!*test.js",
    "!gulpfile.js",
    "!karma.conf.js",
    "!server.js",
    "!app-package.js"
]

//these are all the html templates that we want to bring into our application.
var templatePaths = [
    "*component.html"
]

/**
 * this task will take all the javascript files that we defined above and inject <script href=""> elements into our index.html page.
 * It will put them in between these 2 markers in the html: <!-- inject:js --> and <!-- endinject -->
 * we could also do the same thing with CSS if we wanted to
 */
gulp.task('inject', function() {
  
  var target = gulp.src('index.html');
  var scripts = gulp.src(scriptPaths,{read:false});
  return target.pipe(inject(scripts))
    .pipe(gulp.dest('.'))
});

/**
 * This task turns all the template files into a special javascript file that angular will load into $templateCache
 */
gulp.task('templates', function(){
    return gulp.src(templatePaths)
        .pipe(templateCache({module:"ufo-sightings",moduleSystem:'IIFE'}))
        .pipe(gulp.dest("."))
})

/**
 * a task to make our app ready for a production deploy
 */
gulp.task('prod',['templates'],function(){//templates is a dependency task. Run it first.
    gulp.src(scriptPaths) //get all the scripts and combine them into a single script called app-package.js
        .pipe(concat('app-package.js'))
        .pipe(uglify())  //compact the file so that it is smaller for better network transmission
        .pipe(gulp.dest('.')).on('end',function(){ //when it's done doing all that stuff
            
            gulp.src('index.html') //inject that combined and minified script into index.html
                .pipe(inject(gulp.src('app-package.js',{read:false})))
                .pipe(gulp.dest('.'))            
            
        });
        
    
})

/**
 * a special dev task that will start the dev webserver and watch for changes in files
 * 
 */
gulp.task('dev', ['inject','templates'], function(cb){
    //start the webserver. 
    var server = spawn('node',['server.js'],{ stdio: 'inherit' });
    //watch for changes in any of the javascript files identified above. 
    //This would also include when files are created and deleted
    //when there are changes, run the 'inject' task 
    gulp.watch(scriptPaths,['inject'])
    
    //do the same thing for the template files and 'templates' task
    gulp.watch(templatePaths,['templates'])
})


