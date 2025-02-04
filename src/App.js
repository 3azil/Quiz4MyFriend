import { useState } from "react";
import {CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import Card from "./components/ui/card";
import Input from "./components/ui/input";
import Button from "./components/ui/button";
import Progress from "./components/ui/progress";


const riddles = [
  { question: "Продолжи термин 'Ebanko' ?", answer: "racing" },
  {
    question:
      "Как называется удар, когда игрок отправляет мяч в низкую траекторию, чтобы тот не пересекал сетку?",
    answer: "подсечка",
  },
  { question: "Что лучше всего подходит для ОффРоуда?", answer: "каршеринг" },
  {
    question:
      "Как называется турнир, который является одним из четырёх крупнейших в теннисном календаре?",
    answer: "уимблдон",
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
            <h1>Поздравляем Тебя с Днем Рождения!</h1>
            <p>Желаем счастья, радости и успехов во всех твоих начинаниях!</p>
            <p>Побольше деняг, поменьше проблем и забот!</p>
            <p>Успеха успешного, Любви и Самое главое:</p>
            <h1>Сильных Людей Рядом❤️‍🔥</h1>
            <button className="button" onClick={() => setStep(1)}>
              Продолжить
            </button>
          </div>
        ) : step <= riddles.length ? (
          <div className="card-content">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${(step / riddles.length) * 100}%` }}
              ></div>
            </div>
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
            <h1>Поздравляем!</h1>
            <p>Ты успешно прошел все загадки!</p>
            {/* Открытие изображения по клику */}
            <a
              href="/certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Получить Приз</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}