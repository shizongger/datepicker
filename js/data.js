/**
 *
 * 获取某一月份的全部日期和对应的天数核心算法
 *
 * @author 张翠山
 */
(function () {
    var datepicker = {};

    /**
     * 注意，这里借助JavaScript的内置对象Date来帮我们完成一些计算
     * @param year
     * @param month
     * @returns {Array}
     */
    datepicker.getMonthData = function(year, month) {
        var ret = [];
        if(year == null || month == null) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth()+1;
        }

        //1.计算该月第一天属于星期几，也就是1号属于星期几
        var firstDay = new Date(year, month-1, 1); //new出一个传来的年月的第一天
        var firstDayWeeekDay = firstDay.getDay();//本月的第一天

        //2.上个月的最后一天
        var lastDayOfLastMonth = new Date(year, month-1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); //获取上个月最后一天的日期

        //3.获取本月最后一天的日期
        var lastDayOfThisMonth = new Date(year, month, 0);
        var lastDateOfThisMonth = lastDayOfThisMonth.getDate();

        for(var i = 1; i <= 6*7; i++) {
            var date = i+1-firstDayWeeekDay; //该日期所在当月的的小标
            var showDate = date; //真实的日期showDate，默认与小标相同
            var thisMonth = month;

            //重算真实的日期showDate
            if(date <= 0) {
                showDate = lastDateOfLastMonth + date; //上个月的最后一天日期加上日期索引
                thisMonth = month - 1;
            }

            //如果小标超过本月最后一天，则重算真实的日期
            if(date > lastDateOfThisMonth) {
                showDate = date -lastDateOfThisMonth;
                thisMonth = month + 1;
            }

            //创建一个数据结构month:真实月份，showDate:真实日期(号),date:标志该日期在本月的索引
            ret.push({
                month: thisMonth,
                date: date,
                showDate:showDate
            });
        }
        return ret;
    }

    window.datepicker = datepicker;
})();