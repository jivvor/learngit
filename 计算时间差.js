// 计算时间差（天、时、分、秒）

timeDiff(timestart,timend){
    let timediff = timend.getTime() - timestart.getTime()
    let daydiff, time1, hourdiff, time2, minutediff, time3, secondiff
    daydiff = Math.floor(timediff / (1000 * 60 * 60 * 24))
    if (daydiff >= 1) {
      time1 = timediff % (1000 * 60 * 60 * 24)
      hourdiff = Math.floor(time1 / (1000 * 60 * 60))
      if (hourdiff >= 1) {
        time2 = time1 % (1000 * 60 * 60)
        minutediff = Math.floor(time2 / (1000 * 60))
        if (minutediff >= 1) {
          time3 = time2 % (1000 * 60)
          secondiff = Math.floor(time3 / 1000)
        } else {
          secondiff = Math.floor(time2 / 1000)
        }
      } else {
        minutediff = Math.floor(time1 / (1000 * 60))
        if (minutediff >= 1) {
          time2 = time1 % (1000 * 60)
          secondiff = Math.floor(time2 / 1000)
        } else {
          secondiff = Math.floor(time1 / 1000)
        }
      }
    } else {
      hourdiff = Math.floor(timediff / (1000 * 60 * 60))
      if (hourdiff >= 1) {
        time1 = timediff % (1000 * 60 * 60)
        minutediff = Math.floor(time1 / (1000 * 60))
        if (minutediff >= 1) {
          time2 = time1 % (1000 * 60)
          secondiff = Math.floor(time2 / 1000)
        } else {
          secondiff = Math.floor(time1 / 1000)
        }
      } else {
        minutediff = Math.floor(timediff / (1000 * 60))
        if (minutediff >= 1) {
          time1 = timediff % (1000 * 60)
          secondiff = Math.floor(time1 / 1000)
        } else {
          secondiff = Math.floor(timediff / 1000)
        }
      }
    }
    console.log(daydiff, hourdiff, minutediff, secondiff)
  }