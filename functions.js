
  let myInter = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]];
  let myRem = [-1,4];

  function myIntervals(intervals, toBeRemoved) {
    let [left,right] = toBeRemoved
    let res = []
    let rsTwo = [];
    for(let [l,r] of intervals){
      if(r <= left || l >= right){
        res.push([l,r]);
     }else if(l < left){
         res.push([l, left]);
      }else if(r > right){
         res.push([right, r]);
      }
      (r <= left || l >= right) ? rsTwo.push([l,r]) :
      (l < left) ? rsTwo.push([l, left]) :
      (r > right) ?  rsTwo.push([right, r]) : rsTwo;
    }
    console.log(rsTwo);
    console.log(res);
    return res
  };
const showResult = () => console.log(myIntervals(myInter, myRem));
