function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var len = numbers.length;

    if(len <= 0){
        return false;
    }


    for(var i = 0; i < len; i++){
        if(numbers[i] < 0 || numbers[i] > len - 1){
            return false;
        }
    }

    var temp;
    for(i = 0; i < len; i++){
        while (numbers[i] !== i){
            temp = numbers[i];
            if(numbers[temp] === temp){
                duplication[0] = temp;
                return true;
            }
            else {
                numbers[i] = numbers[temp];
                numbers[temp] = temp;
            }
        }

    }
    return false;
}


// 后续例子 不能改数组
function duplicate(numbers){
    var len = numbers.length;
    if(len <= 0){
        return -1;
    }
    var start = 1,
        end = len - 1,
        middle,
        count = 0;

    while (end >= start){
        middle = Math.floor((end - start) / 2 + start);
        count = countRange(numbers,start,middle);

        if(end === start){
            if(count > 1){
                return start;
            }
            else break;
        }

        if(count > middle - start + 1){
            end = middle;
        }
        else {
            start = middle + 1;
        }
    }

    return -1;
}

function countRange(numbers,start,end){
    if(numbers.length <= 0){
        return 0;
    }

    var count = 0;
    for(var i = 0;i < numbers.length; i++){
        if(numbers[i] >= start && numbers[i] <= end){
            count++;
        }
    }
    return count;

}

