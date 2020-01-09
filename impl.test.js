const pagination = require('./impl');

test('given totalPages of 1 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(1, 1)).toEqual([1]);
});

test('given totalPages of 2 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(2, 1)).toEqual([1, 2]);
});

test('given totalPages of 3 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(3, 1)).toEqual([1, 2, 3]);
});

test('given totalPages of 4 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(4, 1)).toEqual([1, 2, 3, 4]);
});

test('given totalPages of 5 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(5, 1)).toEqual([1, 2, 3, '...', 5]);
});

test('given totalPages of 6 and currentPage 1 we receive an array in the expected format', () => {
    expect(pagination(6, 1)).toEqual([1, 2, 3, '...', 6]);
});

test('given totalPages of 5 and currentPage 4 we receive an array in the expected format', () => {
    expect(pagination(5, 4)).toEqual([1, '...', 3, 4, 5]);
});

test('given totalPages of 7 and currentPage 4 we receive an array in the expected format', () => {
    expect(pagination(7, 4)).toEqual([1, '...', 3, 4, 5, '...', 7]);
});

test('given totalPages of 7 and currentPage 5 we receive an array in the expected format', () => {
    expect(pagination(7, 5)).toEqual([1, '...', 5, 6, 7]);
});

