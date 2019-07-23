const test = require('tape');
const {fetchTitles}=require('../public/js/logic')

const testObj={
  arr:[
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
  ]
}


test("example", t => {
  t.equal(1, 1, "one should equal one");
  t.end();
});

test("testing fetchTitles function",(t)=>{
t.deepEqual(fetchTitles('Boyz',testObj),['Boyz n the Hood', 'Boyz ukmukjfyh', 'Boyz kdtg djfh ' ],"Two Arrays must me equal");
t.end();
})