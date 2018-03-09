module.exports = function solveSudoku(matrix) {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var temp = [];
	function ishere(number) {
		return number == arr[k];
	}
	for (var i = 0; i < 9; i++)
	{
		for (var j = 0; j < 9; j++)
		{
			if (matrix[i][j] == 0)
			{
				var tempI = Math.floor(i / 3) * 3;
				var tempJ = Math.floor(j / 3) * 3;
				for (var k = 0; k < 9; k++)
				{
                    temp.push(matrix[tempI + k % 3][tempJ + Math.floor(k / 3)]);
                    temp.push(matrix[i][k]);
                    temp.push(matrix[k][j]);
				}
                var sol =[];
				for(var k =0; k < arr.length; k++)
					{
						if( temp.some(ishere) == false)
						{
                        sol.push(arr[k]);
						}
					}
				for (var x = 0; x < sol.length; x++)
				{
					matrix[i][j] = sol[x];
					if (solveSudoku(matrix))
					{
						return matrix;
					}
				}
				matrix[i][j] = 0;
				return !matrix;
			}
		}
	}
    return matrix;
	// your solution
}
