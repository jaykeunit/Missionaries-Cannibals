module.exports = function(grunt) {
  grunt.initConfig({
    nodeunit: {
      all: ['test/**/*test.js']
    },
    "install-dependencies": {
      options: {
        isDevelopment: true
      }
    },
    exec: {
      coverage: 'node "node_modules/istanbul/lib/cli.js" cover "node_modules/nodeunit/bin/nodeunit" -- test',
	  nodeunit: 'nodeunit',
	  jsRunDriver: 'node "src/gameDriver.js"',
    }
  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('coverage', 'exec:coverage');
  grunt.registerTask('nodeunit', 'exec:nodeunit');
  grunt.registerTask('jsRunDriver', 'exec:jsRunDriver');
  grunt.registerTask('default', ['install-dependencies', 'nodeunit', 'coverage', 'jsRunDriver']);

}
