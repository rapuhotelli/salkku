// import moment from 'moment';

import moment from 'moment-business-days';

// import momentBusinessDiff from './momentjs-business';
// momentBusinessDiff(moment);

function getPreviousMonday() {
  return moment().startOf('isoWeek');
}

function getCurrentWeekNumbers() {
  const monday = getPreviousMonday();
  return [moment(monday).format('W'), moment(monday).add(1, 'w').format('W')];
}

function getCurrentTenDays() {
  const monday = getPreviousMonday();
  return {
    1: monday,
    2: moment(monday).add(1, 'd'),
    3: moment(monday).add(2, 'd'),
    4: moment(monday).add(3, 'd'),
    5: moment(monday).add(4, 'd'),
    6: moment(monday).add(7, 'd'),
    7: moment(monday).add(8, 'd'),
    8: moment(monday).add(9, 'd'),
    9: moment(monday).add(10, 'd'),
    10: moment(monday).add(11, 'd'),
  };
}

/**
 * Get offset for when to issue blocks start and end in the 2 week grid
 * @param {string} datestring yyyy-mm-dd
 */

/* eslint-disable */
function getIssueTimeRange(start, end) {

  // StartDate
  const monday = getPreviousMonday();

  let startOffset = 2;
  //let endOffset = 12;

  if (moment(start) > moment(monday)) {
    startOffset = moment(monday).businessDiff(moment(start, 'YYYY-MM-DD')) + 2 ;
  }


  let endOffset = moment(monday).businessDiff(moment(end, 'YYYY-MM-DD')) + 3 ;
  //console.log(startOffset);
  if (endOffset > 12) {
    endOffset = 12;
  }

  console.log(endOffset);


  //console.log(monday);

  //moment(start).businessDiff(moment())

  //let startOffset = Math.round(moment.duration(moment(start).diff(moment(monday))).asDays() + 2) ;
  //if (startOffset < 2 ) startOffset = 2;


  // console.log(startOffset);

  //const endOffset = moment.duration(moment(end).businessDiff(moment(start))).asDays() + 2 ;


  /*
  const offsetDate = moment(start);
  const diff = offsetDate.diff(monday);
  const duration = moment.duration(diff);
  const days = duration.asDays();
  let businessDays = moment().businessDiff(moment().subtract(days, 'd'));
  if (businessDays < 0) businessDays = 0;

  const startOffset = businessDays + 2;
  */
  //console.log( moment.duration(moment(start).diff(moment(end))).asDays() );
  /*
  const endOffsetDate = moment(end);
  const endDiff = endOffsetDate.diff(monday);
  const endDuration = moment.duration(endDiff);
  const endDays = endDuration.asDays();
  let businessEndDays = moment().businessDiff(moment().subtract(endDays, 'd'));
  */

  return startOffset + ' / ' + endOffset;
}

export default {
  getPreviousMonday,
  getCurrentTenDays,
  getCurrentWeekNumbers,
  getIssueTimeRange,
};
