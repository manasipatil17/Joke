import { useEffect, useState } from "react";

export default function Jokes(){
    let [joke, setJoke] = useState({});

    const URL= "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () =>{
        let response = await fetch(URL);
        let jsonResponce = await response.json();
        setJoke({setup: jsonResponce.setup, punchline: jsonResponce.punchline});
        
    }

    useEffect(() => {
        async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponce = await response.json();
        console.log(jsonResponce);
        setJoke({setup: jsonResponce.setup, punchline: jsonResponce.punchline});
        }
        getFirstJoke();
    }, []);

    return(
        <div>
            <h3>Jokes!</h3>
            <h3>Manasi Patil</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}