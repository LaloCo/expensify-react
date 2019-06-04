export default (expenses) => {
    return expenses.map((e) => e.amount).reduce((sum, val) => sum + val, 0);
};
