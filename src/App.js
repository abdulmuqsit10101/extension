import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const data = useState('hhaa');


    useEffect(() => {
        console.log("I am here loaded! and Data : ", data);

        function myFunction() {
            var arr = [];

            const x = document.querySelectorAll(".user-details a");
            var i;
            for (i = 0; i < x.length; i++) {
                arr = arr.concat(x[i].innerHTML);
            }
            console.log("arr is  : ", arr);
        }

        myFunction();


        // var mutationObserver = new MutationObserver(function () {
        //     return myFunction();
        // });
        //
        // mutationObserver.observe(document.querySelector('body'), {
        //     attributes: true,
        //     characterData: true,
        //     childList: true,
        //     subtree: true,
        //     attributeOldValue: true,
        //     characterDataOldValue: true
        // });

    });
    return (
        <div className="App">
        </div>
    );
}

export default App;
