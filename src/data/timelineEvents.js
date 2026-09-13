// ids must stay sequential from 1: Timeline.jsx alternates sides with id % 2.
const timelineEvents = [
  'cegep',
  'university',
  'genetec',
  'hackathon',
  'hackathonWin',
  'intactDevops',
  'lh',
  'intactDev',
  'next',
].map((key, index) => ({
  id: index + 1,
  dateKey: `timeline.${key}.date`,
  titleKey: `timeline.${key}.title`,
  descriptionKey: `timeline.${key}.description`,
}));

export default timelineEvents;
