/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const subBoxes = Array.from({ length: 9 }, () => new Set());
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            if (val === ".") continue;
            
            const subBox = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (rows[r].has(val) || cols[c].has(val) || subBoxes[subBox].has(val)) {
                return false;
            }
            
            rows[r].add(val);
            cols[c].add(val);
            subBoxes[subBox].add(val);
        }
    }
    return true;
};