const test = require('tape');
const { extractDetails, titlesArray } = require('../public/js/logic');
const { extractTitles } = require('../src/logic');

const testObj = {
  results: [
    { id: 644, title: 'A.I. Artificial Intelligence' },
    { id: 646, title: 'Dr. No' },
    { id: 647, title: 'Final Fantasy VII: Advent Children' },
    { id: 648, title: 'La belle et la bête' },
    { id: 649, title: 'Belle de jour' },
    { id: 650, title: 'Boyz n the Hood' },
    { id: 651, title: 'M*A*S*H' },
    { id: 652, title: 'Troy' },
    { id: 653, title: 'Nosferatu, eine Symphonie des Grauens' },
    { id: 654, title: 'On the Waterfront' },
    { id: 655, title: 'Paris, Texas' },
    { id: 657, title: 'From Russia with Love' },
    { id: 658, title: 'Goldfinger' },
    { id: 659, title: 'Die Blechtrommel' },
    { id: 660, title: 'Thunderball' },
    { id: 661, title: 'Boyz ukmukjfyh' },
    { id: 662, title: 'Boyz kdtg djfh ' },
  ],
};

const testMovie = JSON.parse(`{
  "adult": false,
  "backdrop_path": "/93wqWj6izOulKuONZ7rG7WxEjEe.jpg",
  "belongs_to_collection": {
    "id": 86083,
    "name": "Grease Collection",
    "poster_path": "/hm752B8LthSSizb4f4Owah4NtxX.jpg",
    "backdrop_path": "/95ASlSlkBSILVLrZA69P0OdniP5.jpg"
  },
  "budextract": 6000000,
  "genres": [
    {
      "id": 10749,
      "name": "Romance"
    }
  ],
  "homepage": null,
  "id": 621,
  "imdb_id": "tt0077631",
  "original_language": "en",
  "original_title": "Grease",
  "overview": "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
  "popularity": 24.887,
  "poster_path": "/iMHdFTrCYhue74sBnXkdO39AJ3R.jpg",
  "production_companies": [
    {
      "id": 4,
      "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
      "name": "Paramount",
      "origin_country": "US"
    },
    {
      "id": 3978,
      "logo_path": null,
      "name": "Robert Stigwood Organization (RSO)",
      "origin_country": ""
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1978-07-07",
  "revenue": 181813770,
  "runtime": 110,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Grease is the word",
  "title": "Grease",
  "video": false,
  "vote_average": 7.4,
  "vote_count": 3911
}`);


test('example', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

test('testing fetchTitles function', (t) => {
  t.deepEqual(extractTitles('Boyz', testObj), [{ id: 650, title: 'Boyz n the Hood' }, { id: 661, title: 'Boyz ukmukjfyh' }, { id: 662, title: 'Boyz kdtg djfh ' }], 'Two resultsays must me equal');
  t.end();
});


test('Testing extractDetails function', (t) => {
  t.deepEqual(extractDetails(testMovie), JSON.parse(`{
    "name": "Grease",
    "posterLink": "https://image.tmdb.org/t/p/w500/iMHdFTrCYhue74sBnXkdO39AJ3R.jpg",
    "overview": "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    "genre": ["Romance"],
    "rating": 7.4
  }`),
  'The expected and the actual must be equal');
  t.end();
});

test('Testing Title resultsay function', (t) => {
  t.deepEqual(titlesArray('Bo', testObj), [{ id: 650, title: 'Boyz n the Hood' }, { id: 661, title: 'Boyz ukmukjfyh' }, { id: 662, title: 'Boyz kdtg djfh ' }], 'Two Arrays must me equal');
  t.end();
});
