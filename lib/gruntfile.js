module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../app/assets/javascripts/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$"], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../app/assets/javascripts/*.js'],
        tasks: ['jshint']
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};
