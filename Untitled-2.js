// Receba as variáveis ​​como parâmetros
function run(offset, weekSchedule) {
    offset = parseInt(offset);

    weekSchedule = JSON.parse(weekSchedule);

    let today = nowUTC(offset);

    if (isWorkDay(today, weekSchedule)) {
        let todaySchedule = getTodaySchedule(weekSchedule, today);
        let intervalTime = getIntervalTime(todaySchedule, today);

        return checkTime(intervalTime, today);
    }

    return false;
}

function getIntervalTime(todaySchedule, today) {
    let intervalTime = [];
    for (let i = 0; i < todaySchedule.workTime.length; i++) {
        intervalTime.push({
            start: utcDate(todaySchedule.workTime[i].start, today),
            end: utcDate(todaySchedule.workTime[i].end, today)
        });
    }

    return intervalTime;
}

function checkTime(intervalTime, today) {
    for (let i = 0; i < intervalTime.length; i++) {
        if (today - intervalTime[i].start > 0 && intervalTime[i].end - today > 0)

            return true;
    }

    return false;
}

function getTodaySchedule(weekSchedule, today) {
    for (let i = 0; i < weekSchedule.length; i++) {
        if (weekSchedule[i].num == today.getUTCDay()) return weekSchedule[i];
    }
}

//Obter agora Data UTC
function nowUTC(offset) {
    let now = new Date();
    let utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Obter data UTC
function utcDate(timeString, today) {

    let hour = getValueByString("hour", timeString);
    let minutes = getValueByString("minutes", timeString);

    let utc_timestamp = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        hour,
        minutes,
        0,
        0
    );
    return new Date(utc_timestamp);
}

//Obter hora/minuto por string com padrão HH:mm
function getValueByString(type, timeString) {
    if (type === "hour") {
        return parseInt(timeString.substring(0, timeString.indexOf(":")));
    } else if (type === "minutes") {
        return parseInt(
            timeString.substring(timeString.indexOf(":") + 1, timeString.length)
        );
    }


    return 0;
}

//Obter se hoje é um dia de trabalho
function isWorkDay(today, workDays) {
    for (let i = 0; i < workDays.length; i++) {
        if (workDays[i].num == today.getDay().toString()) return true;
    }
    return false;
}