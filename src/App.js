import { useState } from "react";
import Card from "./components/ui/card";
import Input from "./components/ui/input";
import Button from "./components/ui/button.js";
import Progress from "./components/ui/progress.js";


const riddles = [
  { question: "Продолжи термин 'Ebanko' ?", answer: "racing" },
  {
    question:
      "Как называется удар, когда игрок отправляет мяч в низкую траекторию, чтобы тот не пересекал сетку?",
    answer: "подсечка",
  },
  { question: "Что лучше всего подходит для ОффРоуда ?", answer: "каршеринг" },
  {
    question: "Как расшифровывается 'РТТ' ?",
    answer: "российский теннисный тур",
  },
  { question: "Что всегда перед нами, но мы его не видим?", answer: "будущее" },
];

export default function RiddleApp() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(riddles.length).fill(""));

  const isAnswerCorrect =
    step > 0 && answers[step - 1] === riddles[step - 1]?.answer;

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[step - 1] = value.toLowerCase();
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (isAnswerCorrect) {
      setStep(step + 1);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        {step === 0 ? (
          <div className="card-content">
            <h1>Поздравляю Тебя с Днем Рождения!</h1>
            <p>Желаю счастья, радости и успехов во всех твоих начинаниях!</p>
            <p>Побольше деняг, поменьше проблем и забот!</p>
            <p>Успеха успешного, Любви и Самое главное:</p>
            <h1>Сильных Людей Рядом</h1>
            <h3>❤️‍🔥</h3>
            <button className="button" onClick={() => setStep(1)}>
              Продолжить
            </button>
          </div>
        ) : step <= riddles.length ? (
          <div className="card-content">
            {/* Прогресс-бар: значение вычисляется по формуле ((step - 1) / total) * 100 */}
            <Progress value={((step - 1) / riddles.length) * 100} />
            <p>{riddles[step - 1]?.question}</p>
            <input
              className="input-field"
              value={answers[step - 1]}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              className="button"
              onClick={nextStep}
              disabled={!isAnswerCorrect}
            >
              Перейти к следующей головоломке
            </button>
          </div>
        ) : (
          <div className="card-content">
            <h1>Поздравляю!</h1>
            <p>Ты успешно прошел все загадки!</p>
            <p>Вот твой заслуженный приз</p>
            <p> ⋆✴︎˚｡⋆⋆✴︎˚｡⋆⋆✴︎˚｡⋆ </p>
            <a
              href={`${process.env.PUBLIC_URL}/certificate.jpg`}
              download="certificate.jpg"
            >
              <button className="button">Получить Приз</button>
            </a>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>by 3azil</p>
      </footer>
    </div>
  );
}
