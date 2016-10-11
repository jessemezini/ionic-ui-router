// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "search.html",
          controller: 'PlaylistsCtrl',
          resolve: {
            playlists: function(PlaylistsService) {
              return PlaylistsService.getPlaylists()
            }
          }
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl',
          resolve: {
            playlists: function(PlaylistsService) {
              return PlaylistsService.getPlaylists()
            }
          }
        }
      }
    })
    .state('app.playlist', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent': {
          templateUrl: "playlists.playlist.html",
          controller: 'PlaylistCtrl',
          resolve: {
            playlist: function($stateParams, PlaylistsService) {
              return PlaylistsService.getPlaylist($stateParams.playlistId)
            }
          }
        }
      }
    })
    .state('app.single', {
      url: "/playlists/:playlistId/:singleId",
      views: {
        'menuContent': {
          templateUrl: "playlists.playlist.single.html",
          controller: 'SingleCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
