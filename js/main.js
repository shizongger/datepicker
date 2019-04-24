(function() {
    var datepicker = window.datepicker;

    var myYear, myMonth;

    var $wrapper;

    datepicker.buildUI = function (year, month) {
        var dataObject = this.getMonthData(year, month);
        myYear = dataObject.year;
        myMonth = dataObject.month;

        var html = "    <div class=\"ui-datepicker-header\">\n" +
            "        <a class=\"ui-datepicker-btn ui-datepicker-prev-btn\">&lt;</a>\n" +
            "        <a class=\"ui-datepicker-btn ui-datepicker-next-btn\">&gt;</a>\n" +
            "        <span class=\"ui-datepicker-curr-month\">"+dataObject.year+"年"+dataObject.month+"月</span>\n" +
            "    </div>\n" +
            "    <div class=\"ui-datepicker-body\">\n" +
            "        <table>\n" +
            "            <thead>\n" +
            "                <tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr>\n" +
            "            </thead>\n" +
            "            <tbody>\n";
        for(var i = 0; i < dataObject.montData.length; i++) {
            if(i%7 == 0) {
                html += "<tr>"
            }
            html = html + "<td data-date='"+dataObject.montData[i].date+"'>"+dataObject.montData[i].showDate+"</td>";
            if(i%7 == 6) {
                html += "</tr>";
            }
        }
            html +=
            "            </tbody>\n" +
            "        </table>\n" +
            "    </div>";

        return html;
    }

    datepicker.reader = function(direction) {
        var year, month;
        if(myMonth) {
            month = myMonth;
        }
        if(myYear) {
            year = myYear;
        }
        if(direction === 'prev') {
            month--;
        }
        if(direction === 'next') {
            month++;
        }
        var html = datepicker.buildUI(year, month);
        $wrapper = document.querySelector(".ui-datepicker-wrapper");
        if(!$wrapper) {
            $wrapper = document.createElement("div");
            document.body.appendChild($wrapper);
            $wrapper.className = "ui-datepicker-wrapper";
        }
        $wrapper.innerHTML = html;
    }

    datepicker.init = function(input) {
        datepicker.reader();
        var $input = document.querySelector(input);
        var isOpen = false;

        $input.addEventListener("click", function() {
            if (isOpen) {
                $wrapper.classList.remove("ui-datepicker-wrapper-show");
            } else {
                //获取input的位置和高度
                var inputLeft = $input.offsetLeft;
                var inputTop = $input.offsetTop;
                var inputHeght = $input.offsetHeight;

                $wrapper.style.left = inputLeft;
                $wrapper.style.top = inputTop + inputHeght + 2 + "px";
                $wrapper.classList.add("ui-datepicker-wrapper-show");
            }
            isOpen = !isOpen;
        }, false);

        $wrapper.addEventListener("click",function (e) {
            var target = e.target;
            if(!target.classList.contains("ui-datepicker-btn")) {
                return;
            }

            if(target.classList.contains("ui-datepicker-prev-btn")) {
                datepicker.reader("prev");
            } else if(target.classList.contains("ui-datepicker-next-btn")) {
                datepicker.reader("next");
            }
        }, false);

        $wrapper.addEventListener("click", function (e) {
            var target = e.target;
            if(target.tagName.toLowerCase() == "td") {
                var index = target.dataset.date;
                var date = new Date(myYear, myMonth-1, index);
                var dateValue = datepicker.formatter(date);
                $input.value = dateValue;
                $wrapper.classList.remove("ui-datepicker-wrapper-show");
                isOpen = false;
            }
        }, false);
    }
    
    datepicker.formatter = function (date) {
        function parse(num) {
            if(num <= 9) {
                return "0"+num;
            }
            return num;
        }
        var ret = "";
        ret += date.getFullYear() + "-";

        ret += parse(date.getMonth()+1) + "-";

        ret += parse(date.getDate());
        return ret;
    }
})();