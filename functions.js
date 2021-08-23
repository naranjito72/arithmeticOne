"use strict"
  console.log("One ring to rule them all");

  let myInter = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]];
  let myRem = [-1,4];

  function myIntervals(intervals, toBeRemoved) {
    let [left,right] = toBeRemoved
    let resArr = []

    for(let [l,r] of intervals){
      (r <= left || l >= right) ? resArr.push([l,r]) :
      (l < left) ? resArr.push([l, left]) :
      (r > right) ?  resArr.push([right, r]) : resArr;
    }
    return resArr
  };
const showResult = () => console.log(myIntervals(myInter, myRem));

// CORS
 var http_request;
 http_request = new XMLHttpRequest();
 http_request.onreadystatechange = function () { /* .. */};
 http_request.open("GET", "https://github.com/naranjito72/arithmeticOne.git");
 http_request.setRequestHeader("Content-Type", "application/json");
