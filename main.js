var blue = document.querySelector('#blue');
            var a = document.querySelector('#claro');
            var z = document.querySelector('#noche');
            var x = document.querySelector('#nocheo');
            var style = document.createElement('style');



            x.addEventListener('click', () => {
                document.body.style.backgroundColor = "#161625";
                document.getElementsByClassName("post").style.color = "blue";               
                localStorage.setItem('x');
                                  });
            a.addEventListener('click', () => {
                document.body.style.backgroundColor = "#fff";
                localStorage.setItem('a')
                                 });
            z.addEventListener('click', () => {
                document.body.style.backgroundColor = "#252850";
                localStorage.setItem('z')
                                 });