import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: startDate
    })
});

test('should generate set end date action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: endDate
    })
});

test('should generate set filter by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    })
});

test('should generate set filter by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
});

test('should generate set text filter action object', () => {
    const textFilter = 'This is the text filter';
    const action = setTextFilter(textFilter);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    })
});

test('should generate set text filter action object to default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});
