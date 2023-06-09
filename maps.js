const emojis = {
  '-': ' ',
  O: '🚪',
  X: '💣',
  I: '🎁',
  PLAYER: '💀',
  BOMB_COLLISION: '🔥',
  GAME_OVER: '👎',
  WIN: '🏆',
  HEART: '❤️️',
};

const maps = [];

/* Level 1 */
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);

/* Level 2 */
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);

/* Level 3 */
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);

/* Others levels */
/* maps.push([
  'O-----XXXX',
  'XXXXX-XXXX',
  'XX----XXXX',
  'XX-XXXXXXX',
  'XX-----XXX',
  'XXXXXX-XXX',
  'XX-----XXX',
  'XX-XXXXXXX',
  'XX-----IXX',
  'XXXXXXXXXX',
]);
maps.push([
  'IXX-----------X',
  '-X-XXXXXXXXXX-X',
  '-X--XXXXXXXXX-X',
  '-XX-XXXXXX----X',
  '-X---------XXXX',
  '-XX-XXXXXX-XXXX',
  '-XX-XXXXXX-XXXX',
  '-XX-XXXXXX-XXXX',
  '-XX-XXXXXX-XXXX',
  '-XX-XXXXXX-XXXX',
  '----XXX-----XXX',
  '-XXXXXX-XXX--XX',
  '-X------XXXX--X',
  '-XXXXXXXXXXXXO-',
  'XXXXXXXXXXXXXX-',
]);
maps.push([
  'OX---XXXXXXXXXX',
  '-X-X------XXXXX',
  '-XIXXXXXX-XXXXX',
  '-XXXXX-XX-XXXXX',
  '-X-----XX---XXX',
  '-XXXXX-XXXX-XXX',
  '-XXXXX-XXXX-XXX',
  '-XXXXX-XXXX-XX-',
  '-XXXXX-XXXX-XX-',
  '-XXXXX-XXXX-XX-',
  '--XXXX---------',
  'X-XXXXXXXXXXXX-',
  'X--------------',
  'X-X-XXXXX-XXX--',
  'X-------------X',
]);
maps.push([
  '-XX-----------X',
  '-X-XXXXXXXXXX-X',
  '-X-OXXXXXXXXX-X',
  '-XX-XXXXXX----X',
  '-X---------XXXX',
  '-XX-XX-XXX-XXXX',
  '-XX-XX-XXX-XXXX',
  '-XX-XX-XXX-XXXX',
  '-XX-XX-XXX-XXXX',
  '-XX-XXXXXX-XXXX',
  '----XX------XXX',
  '-XXXXX--XXX--XX',
  '-X------XXXX--X',
  '-XXXXX-XXXXXX--',
  'XI-----XXXXXXXX',
]);
maps.push([
  'XXX---------',
  'XX-XXXXXXXXX',
  'XX--XXXX--IX',
  'XXX-XXXX-X--',
  'XX---------X',
  'XXX-XX-X-X-X',
  'XXX-XX-X-X-X',
  'XXXXXX-X-X-X',
  'XXX------X-X',
  'XXX-XXXXXX-X',
  'X---XX------',
  '-XOXXX--XXX-',
]);

maps.push([
  '---X---X---X',
  '-X---X---X--',
  '---X---X--OX',
  '-X---X---X--',
  '---X---X---X',
  '-X---X---X--',
  '---X---X---X',
  '-X---X---X--',
  '---X---X---X',
  '-X---X---X--',
  '---X---X---X',
  'IX---X---X--',
]);

maps.push([
  '---X--------',
  '-X---XXXXXXI',
  '---X-------X',
  'XXX-XXX-XX--',
  '---X---X---X',
  '-X---X---X--',
  '-X-XX-XXX-XX',
  '-X---X---X--',
  '---X---X---X',
  'XXX-XXX-XX--',
  '---X---X---X',
  'OX---X---X--',
]);

maps.push([
  '------------',
  '-XXXXXXXXXXO',
  '-X---------X',
  '-X-XXXXXXX--',
  '-X-X------X-',
  '-X-X-XXXX-X-',
  '-X-X-XI-X-X-',
  '-X-X----X-X-',
  '-X-XXXXXX-X-',
  '-X--------X-',
  '-XXXXXXXXXX-',
  '------------',
]);
maps.push([
  'X---XXXXXXXXX---X',
  'X-X--XXXXXXX--X-X',
  'X--X--XXXXX--X--X',
  'XX-XX--XXX--XX-XX',
  'XX--XX--X--XX--XX',
  'XXX--XX---XX--XXX',
  'XXXX--XX-XX--XXXX',
  'XXXXX--XIX--XXXXX',
  'XXXXXX-XXX-XXXXXX',
  'XXXXX--XOX--XXXXX',
  'XXXX--X---X--XXXX',
  'XXX--X--X--X--XXX',
  'XX--X--XXX--X--XX',
  'X--X--XXXXX--X--X',
  '--X--XXXXXXX--X--',
  '-X--XXXXXXXXX--X-',
  '---XXXXXXXXXXX---',
]);

maps.push([
  'XXX---XXXXX---XXX',
  'XXX-X--XXX--X-XXX',
  'XXX-XX--X--XX-XXX',
  'XX--XXX---XXX--XX',
  'X--XXXXX-XXXXX--X',
  '--XX---------XX--',
  '-XXX-XXXXXXX-XXX-',
  '--XX-X--O--X-XX--',
  'X--X-X-XXX-X-X--X',
  'XX-X---XIX---X-XX',
  'X--XXXX---XXXX--X',
  '--XXX---X---XXX--',
  '-XXXX--XXX--XXXX-',
  '--XXX--XXX--XXX--',
  'X--XXX--X--XXX--X',
  'XX--XXXX---XX--XX',
  'XXX-----------XXX',
]); */
