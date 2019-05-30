import moment from 'moment';

export default [{
    id: '1',
    description: 'Switch Game',
    note: 'Mario Kart',
    amount: 105000,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: 'Bigote',
    amount: 200000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Headspace subscription',
    note: 'Monthly for May',
    amount: 9900,
    createdAt: moment(0).add(4, 'days').valueOf()
}]