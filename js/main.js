(function() {
    var datepicker = window.datepicker;

    datepicker.buildUI = function (year, month) {
        var dataObject = this.getMonthData(year, month);

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
            html = html + "<td>"+dataObject.montData[i].showDate+"</td>";
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

    datepicker.init = function($input) {
        var html = datepicker.buildUI(2019, 3);
        var $wrapper = document.createElement("div");
        $wrapper.classList.add("ui-datepicker-wrapper");
        $wrapper.innerHTML = html;
        document.body.appendChild($wrapper);

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

    }
})();