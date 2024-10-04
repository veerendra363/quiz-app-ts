import { shuffleArray } from "./utils"

export type Question = {
    category: string
    correct_answer: string
    difficulty: string 
    incorrect_answers: string[]
    type: string
    question: string
}

export type QuestionState = Question & {
    answers: string[]
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HAED = "hard"
}

export const fectchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    const arr = data.results ? data.results : data.result
    return arr.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}