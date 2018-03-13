import { OPEN_CHART, OPEN_LIST } from '../actions/chart_actions';

const chartReducer = (state = 'list', action) => {
  switch (action.type) {
    case OPEN_CHART:
    // debugger
      return 'chart';
    case OPEN_LIST:
      return 'list';
    default:
      return state;
  }

};

export default chartReducer;
