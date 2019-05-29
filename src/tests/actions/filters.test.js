import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
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
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test'
    })
});

test('should generate set text filter action object to default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});
