angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope, playlists) {
  $scope.playlists = playlists
})

.controller('PlaylistCtrl', function($scope, playlist, $rootScope) {
  $scope.playlist = playlist;
  $rootScope.playlist = playlist;
})

.controller('SingleCtrl', function($scope, $stateParams, PlaylistsService) {
  PlaylistsService.getSingle($stateParams.playlistId, $stateParams.singleId).then(function(data){
    $scope.single = data;
  })
});