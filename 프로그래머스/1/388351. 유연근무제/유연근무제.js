function solution(schedules, timelogs, startday) {
    schedules = schedules.map(s => {
        const min = Number((s + 10).toString().split("").slice(-2).join(""))
        if (min >= 60) {
            return s = s + 50
        } else {
            return s = s + 10
        }
    })
    const weeklogs = timelogs.map(logs => {
        return logs.filter((log, index) => {
            const weekend = (startday + index) % 7 + 1
            return weekend !== 1 && weekend !== 7
        })
    })
    
    const prize = weeklogs.map((week, index) => {
        return week.filter(w => {
            return w <= schedules[index];
        })
    }).filter(week => week.length >= 5)
    
    return prize.length;
}