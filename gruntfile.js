module.exports = function(grunt) {

  grunt.initConfig({
    concat_css: {
      options: {
        separator: ''
      },
      dist: {
        src: ['styles/variables.scss','styles/mixins.scss','styles/reset.scss','styles/style.scss'],
        dest: 'styles/main.scss'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'build/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['build/script.main.js'],
        dest: 'build/script.main.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['main.scss'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['IE 8', 'ie 9', 'last 2 versions' ]
      },
      dist: {
        src: 'build/*.css',
        dest: 'build/main.prefixed.css'
      }
    },
    watch : {
      options: {
        livereload: true,
      },
      sass: {
        files: ['styles/*.scss'],
        tasks: ['concat','sass'],
      },
      scripts: {
        files: ['js/src/*.js'],
        tasks: ['concat']
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['concat','concat_css','uglify','sass','imagemin','autoprefixer']);

};
