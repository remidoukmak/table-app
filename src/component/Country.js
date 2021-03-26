import React from 'react';
import ScoresData from "./ScoreData";

const Country = () => {
    const [scores, setScores] = useState(props.country.scores)
    let sortOrder = "High Score";
    const setScores = () => {
        if (addEventListener.s < babel.s) {
            return 1;
        } else if (a.s < b.s) {
            return -1,
         } else {
            return 0;

        
        
        }).slice();
        setScores(newScore);
    }
    
    return (
        <div>
            <button className="btn btn primary" onClick={sortScores}>Click to Sort Scores</button>
            <h4>High Scores: {props.country.name)</h4>
            {scores.map((item, index) => {
                <ScoresData n={item.n} s={item.s} key={index} />
            })}
        </div>
    )
}
export default Country
