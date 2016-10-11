angular.module('starter.services', [])

	.service('PlaylistsService', function($q) {
		return {
	    playlists: [
	      { id: '1', title: 'Playlist1',
		      singleCategory: [
		        { id: '1', title: 'Playlist1.singleCategory1' },
		        { id: '2', title: 'Playlist1.singleCategory2' },
		        { id: '3', title: 'Playlist1.singleCategory3' }
		      ]
		    },
		    { id: '2', title: 'Playlist2',
		      singleCategory: [
		        { id: '1', title: 'Playlist2.singleCategory1' },
		        { id: '2', title: 'Playlist2.singleCategory2' },
		        { id: '3', title: 'Playlist2.singleCategory3' }
		      ]
		    },
		    { id: '3', title: 'Playlist3',
		      singleCategory: [
		        { id: '1', title: 'Playlist3.singleCategory1' },
		        { id: '2', title: 'Playlist3.singleCategory2' },
		        { id: '3', title: 'Playlist3.singleCategory3' }
		      ]
		    }
	    ],
	    getPlaylists: function () {
	      return this.playlists
	    },
	    getPlaylist: function(playlistId) {
	      var dfd = $q.defer()
	      this.playlists.forEach(function(playlist) {
	        if (playlist.id === playlistId) dfd.resolve(playlist)
	      })

	      return dfd.promise
	    },
	     getSingle: function(playlistId, singleId) {
	      var dfd = $q.defer();
	       this.getPlaylist(playlistId).then(function(playlist) {
	        playlist.singleCategory.forEach(function(single) {
        	      if(single.id==singleId) {
        	        dfd.resolve(single);
        	      }
        	    });
	       
	       });
	       
	      return dfd.promise
	    }
	  }
	})