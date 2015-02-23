/**
 * Module for calculating zipfs for music lovers
 *
 * Author Stephen Parker <shurakaisoft@gmail.com>
 */

/**
 * Rank a set of songs according to Zipfs Law.
 *
 * input: is an Object
 *   selectCount: Number, number of songs to return
 *   songs:       an ordered array of song objects
 *     {
 *     	 listenCount: Number, number of times the song was listened to
 *     	 name:        String, the name of the song
 *     }
 *
 * return an array of song names
 *
 */
exports.run = function (input) {
	var songs = [],   // the songs with a zipf's weighting
		result = [],  // the short list of good songs
		i;            // yep it's a loop counter...

	// add songs with their scores
	for (i = 0; i < input.songs.length; i++) {
		songs.push({
			index: i,
			name: input.songs[i].name,
			score: (input.songs[i].listenCount * (i + 1))
		});
	}

	// sort
	songs.sort(function (a, b) {
		return (b.score - a.score); // leaves tied values in original order
	});

	// select
	for (i = 0; i < input.selectCount; i++) {
		result.push(songs[i].name);
	}

	return result;
};
