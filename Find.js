function Find(target, array)
{
    // write code here
    var row = 0,
        col = array[0].length - 1;

    while(row < array.length && col >= 0){
        if(array[row][col] > target){
            col--;
        }
        else if(array[row][col] < target){
            row++;
        }
        else {
            return true;
        }
    }
    return false;
}