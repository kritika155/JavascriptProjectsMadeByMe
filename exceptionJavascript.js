<html>
<head>
    <title>try catch example</title>
</head>
<body bgcolor=blue text="white">
    <h4> Enter Either Value as Zero (0)</h4>
    Value 1: <input type="text" id="t1"/> <br>
    Value 2: <input type="text" id="t2"/> <br>
    Answer: <input type="button" id="b1" value="Hit me" onclick="pp()"> <br>
    <script>
        function pp() {
            var c = parseInt(document.all.t1.value)
            var d = parseInt(document.all.t2.value)
            var e = 0
            try {
                if (d == 0) {
                    throw "Divisor is Zero"
                }
                if (c == 0) {
                    throw "To be divided is Zero"
                }
            }
            catch (error) {
                alert(error)
            }
        }
    </script>
</body>
</html>