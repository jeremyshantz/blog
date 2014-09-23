module.exports = function(grunt){
    grunt.initConfig({

        gitcommit: {

            deploy: {
                options: {
                    cwd: 'deploy',
                    message: 'Deploying',
                    verbose: true
                }
            }
        },
        gitpush: {
            deploy: {
                options: {
                    cwd: 'deploy',
                    remote: 'origin',
                    branch: 'master'
                }
            }
        },
        copy: {
            deploy: {
                expand: true,
                cwd: './public/',
                src: ['**'],
                dest: './deploy/'
            }

        },
        _clean: {
            deploy: ['./deploy/*']
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.renameTask('clean', '_clean');
//
//    grunt.registerTask('fontawesome', ['gitclone:fontawesome', 'copy:fontawesome', '_clean:tmp']);
//    grunt.registerTask('fancybox', ['gitclone:fancybox', 'copy:fancybox', '_clean:tmp']);
//    grunt.registerTask('default', ['gitclone', 'copy', '_clean:tmp']);
//    grunt.registerTask('clean', ['_clean']);


    grunt.registerTask('deploy', ['_clean:deploy', 'copy:deploy', 'gitcommit:deploy' ]);


};