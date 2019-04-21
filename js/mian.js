(function() {
    var datepicker = window.datepicker;

    datepicker.buildUI = function (year, month) {
        var monthData = this.getMonthData(year, month);

        var html = "    <div class=\"ui-datepicker-header\">\n" +
            "        <a class=\"ui-datepicker-btn ui-datepicker-prev-btn\">&lt;</a>\n" +
            "        <a class=\"ui-datepicker-btn ui-datepicker-next-btn\">&gt;</a>\n" +
            "        <span class=\"ui-datepicker-curr-month\">2016-12</span>\n" +
            "    </div>\n" +
            "    <div class=\"ui-datepicker-body\">\n" +
            "        <table>\n" +
            "            <thead>\n" +
            "                <tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr>\n" +
            "            </thead>\n" +
            "            <tbody>\n" +
            "                <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>\n" +
            "                <tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>\n" +
            "                <tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr>\n" +
            "                <tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr>\n" +
            "                <tr><td>29</td><td>30</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>\n" +
            "            </tbody>\n" +
            "        </table>\n" +
            "    </div>";

        return html;
    }

    datepicker.init = function($dom) {
        var html = datepicker.buildUI();
        $dom.innerHTML = html;
    }
})();