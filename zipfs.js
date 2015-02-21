/**
 * Module for calculating zipfs for music lovers
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
			score: input.songs[i].listenCount / (input.songs.length - i)
		});
	}

	// sort
	songs.sort(function (a, b) {
		return (b.score - a.score);
	});

	// select
	for (i = 0; i < input.selectCount; i++) {
		result.push(songs[i].name);
	}

	return result;
};