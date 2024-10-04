import React from "react";

type Props = {
    question: string
    answers: string[]
    callback: any
    userAnswer: any
    questionNr: number
    totatlQuestions: number
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totatlQuestions
}) => {
    return (<div>
        <p className="number">Question: {questionNr} / {totatlQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => 
                (<div key={answer}>
                <button disabled={userAnswer} onClick={callback} value={answer}>
                    <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
                </div>)
            )}
        </div>
    </div>)
}
export default QuestionCard