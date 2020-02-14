export default {
    date(value) {
        var timeArr = value.split(/[- :]/);
        var date = new Date(Date.UTC(timeArr[0], timeArr[1], timeArr[2], timeArr[3], timeArr[4], timeArr[5]));

        var day = String(date.getDate());
        var month = String(date.getMonth());
        var year = String(date.getFullYear());

        if (day.length < 2) day = '0' + day;
        if (month.length < 2) month = '0' + month;
        
        return `${day}/${month}/${year}`;
    }
}