// Homework

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];
/*
// Cara Lama
let present= [];
let count = 0;
for(let i=0; i <videoData.length ; i++){
  if (videoData[i].present == true){
    present.push(videoData[i].name)
    count++;
  }
}

// Cara baru 1 outputnya : semuanya
let cara_baru1 = (inputan) => {
  let hasil = inputan.filter(inputan => inputan.present == true)
  return hasil
}
*/

let cara_baru2 = (inputan) => {
  let hasil_filter = inputan.filter(inputan => inputan.present === true)
  let hasil_map = hasil_filter.map(hasil_filter => hasil_filter.name)
  return hasil_map
}

let result = cara_baru2(videoData)

console.log(result);
console.log(`Totalnya ada : ${result.length}`);
