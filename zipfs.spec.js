/**
 * Unit tests for zipfs song chooser
 */
'use strict';

// Dependencies
var should = require('should'),
	assert = require('assert');

// module under test
var zipfs = require('./zipfs');


describe('Module zipfs', function () {
	var input1, input2, input3,
		output1, output2, output3;
	beforeEach(function () {
		input1 = {
			selectCount: 2,
			songs: [
				{
					listenCount: 30,
					name: 'one'
				},
				{
					listenCount: 30,
					name: 'two'
				},
				{
					listenCount: 15,
					name: 'three'
				},
				{
					listenCount: 25,
					name: 'four'
				}
			]
		};
		input2 = {
			selectCount: 3,
			songs: [
				{
					listenCount: 197812,
					name: 're_hash'
				},
				{
					listenCount: 78906,
					name: '5_4'
				},
				{
					listenCount: 189518,
					name: 'tomorrow_comes_today'
				},
				{
					listenCount: 39453,
					name: 'new_genious'
				},
				{
					listenCount: 210492,
					name: 'clint_eastwood'
				},
				{
					listenCount: 26302,
					name: 'man_research'
				},
				{
					listenCount: 22544,
					name: 'punk'
				},
				{
					listenCount: 19727,
					name: 'sound_check'
				},
				{
					listenCount: 17535,
					name: 'double_bass'
				},
				{
					listenCount: 18782,
					name: 'rock_the_house'
				},
				{
					listenCount: 198189,
					name: '19_2000'
				},
				{
					listenCount: 13151,
					name: 'latin_simone'
				},
				{
					listenCount: 12139,
					name: 'starshine'
				},
				{
					listenCount: 11272,
					name: 'slow_country'
				},
				{
					listenCount: 10521,
					name: 'm1_a1'
				}
			]
		};
		input3 = {
			selectCount: 2,
			songs: [
				{
					listenCount: 20,
					name: 'ichiban'
				},
				{
					listenCount: 10,
					name: 'niban'
				}
			]
		};
		output1 = [
			'four',
			'two'
		];
		output2 = [
			'19_2000',
			'clint_eastwood',
			'tomorrow_comes_today'
		];
		output3 = [
			'ichiban',
			'niban'
		];

	});

	it('should return an array', function () {
		zipfs.run(input1).should.be.an.Array;
	});
	it('should return return an array with the same length as selectCount', function () {
		var result = zipfs.run(input1);

		result.length.should.equal(input1.selectCount);
	});

	it('should return the correct songs', function () {
		// should for some reason is not doing deepEqual, so using assert...
		assert.deepEqual(zipfs.run(input1), output1);
		// zipfs.run(input1).should.deepEqual(output1);
	});
	it('should also return the correct songs', function () {
		assert.deepEqual(zipfs.run(input2), output2);
	});
	it('shoudl also use the original order for as a tiebreaker', function () {
		assert.deepEqual(zipfs.run(input3), output3);
	});
});