// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  let musicianPlay = [];
  for (let i = 0; i < musiciansArr.length; i++) {
    musicianPlay.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }
  return musicianPlay;
}
