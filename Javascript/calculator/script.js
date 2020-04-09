

document.getElementById('sum').addEventListener('click', sumdata)

        function sumdata(){
            var a = parseInt(document.getElementById('a').value)
            var b = parseInt(document.getElementById('b').value)

            if(a && b){
                document.getElementById('output').innerHTML = `
                    <p style="color:white;
                    font-size: 30px;
                    font-family: 'Gotu', sans-serif;"> Sum of ${a} and ${b} = ${a+b}</p>
                `
            }else{
                alert('Enter some input')
            }
        }
    


        document.getElementById('diff').addEventListener('click', diffdata)

        function diffdata(){
            var a = parseInt(document.getElementById('a').value)
            var b = parseInt(document.getElementById('b').value)

            if(a && b){
                document.getElementById('output').innerHTML = `
                    <p style="color:white;
                    font-size: 30px;
                    font-family: 'Gotu', sans-serif;"> Diff of ${a} and ${b} = ${a-b}</p>
                `
            }else{
                alert('Enter some input')
            }
        }


        document.getElementById('product').addEventListener('click', proddata)

        function proddata(){
            var a = parseInt(document.getElementById('a').value)
            var b = parseInt(document.getElementById('b').value)

            if(a && b){
                document.getElementById('output').innerHTML = `
                    <p style="color:white;
                    font-size: 30px;
                    font-family: 'Gotu', sans-serif;"> Product of ${a} and ${b} = ${a*b}</p>
                `
            }else{
                alert('Enter some input')
            }
        }


        document.getElementById('div').addEventListener('click', divdata)

        function divdata(){
            var a = parseInt(document.getElementById('a').value)
            var b = parseInt(document.getElementById('b').value)

            if(a && b){
                document.getElementById('output').innerHTML = `
                    <p style="color:white;
                    font-size: 30px;
                    font-family: 'Gotu', sans-serif;"> Quotient of ${a} and ${b} = ${a/b}</p>

                    <p style="color:white;
                    font-size: 30px;
                    font-family: 'Gotu', sans-serif;"> Remainder of ${a} and ${b} = ${a%b}</p>
                `
            }else{
                alert('Enter some input')
            }
        }

