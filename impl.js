var pagination = {
    constants: {
        pagination: {
            numbersToShow: 4
        }
    },
    pruebapaginacion: function(totalPages, currentPage) {
        let nav = [1, 2, 3, 4];
        if (totalPages <= this.constants.pagination.numbersToShow) {
            nav = nav.slice(0, totalPages)
        } else {
            if(currentPage < this.constants.pagination.numbersToShow){
                nav = nav.slice(0, this.constants.pagination.numbersToShow - 1).concat(['...', totalPages]);
            } else if(currentPage >= totalPages-2) {
                nav = nav.slice(0, 1).concat(['...',totalPages-2, totalPages-1, totalPages]);
            } else {
                nav =nav.slice(0, 1).concat(['...',currentPage-1, currentPage, currentPage+1, '...', totalPages]);
            }
        }
        return nav;
    }
};
var generatePagination = function(totalPages, currentPage) {
    return pagination.pruebapaginacion.call(pagination, totalPages, currentPage)
}
module.exports = generatePagination;