function stimulate_one_year_growth(garden) {
    height = garden.length;
    width = garden.length[0];

    new_garden =
        for (i = 0; i < garden.length, i++;) {
            for (j = 0; i < garden.length[0], j++;) {
                var populated_neighbors = function count_populated_neighbors(garden, i, j) {
                    if (garden[i][j] == 1 && populated_neighbors === 8) {
                        new_garden[i][j] = 0;
                    }
                }
            }
        }
}