// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],   [0][0] [0][1] [0][2]
//   ['X', null, 'X'],  [1][0] [1][1] [1][2]
//   [null, 'X', null]  [2][0] [2][1] [2][2]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null
// function ticTacToe(arr);
//     for(i=0; i<arr.length; i++){
//         //for(j=0; j<arr.length; j++){
//             if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]){
//                 return (arr[i][0])
//             }
//             else if(arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i]){
//                 return (arr[0][i])
//             }
//             else if(arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]){
//                 return (arr[0][0])
//             }
//             else if(arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0]){
//                 return (arr[0][2])
//             }
//             else return null;
//        // }
//     }