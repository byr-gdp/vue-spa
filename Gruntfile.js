module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ["src/views/*.vue", "src/main.js", "index.html"],
                tasks: [],
                options: {
                     livereload: 9100
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch"])
}
