angular.module('angularApp.controllers')
    .controller('IndexCtrl',
        ['$log',
            function($log) {
                $log.info('Init Index Ctrl');
            }
        ]
);