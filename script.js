const testData = {
    test1: {
        name: "Тест 1: Настроение",
        questions: [
            { question: "Как вы себя чувствуете сегодня?", options: ["Отлично", "Хорошо", "Нормально", "Плохо"] },
            { question: "Ваше настроение за последний месяц?", options: ["Постоянно хорошее", "Часто хорошее", "Иногда плохое", "Часто плохое"] },
            { question: "Как вы справляетесь со стрессом?", options: ["Хорошо", "Иногда не удается", "Не справляюсь", "Плохо"] },
            { question: "Как вы себя чувствовали вчера?", options: ["Очень хорошо", "Хорошо", "Удовлетворительно", "Плохо"] },
            { question: "Как вы обычно начинаете свой день?", options: ["С улыбкой и энергией", "С нейтральным настроением", "С усталостью", "С плохим настроением"] },
            { question: "Как часто ваше настроение меняется в течение дня?", options: ["Часто", "Иногда", "Редко", "Не меняется"] },
            { question: "Как бы вы оценили свое эмоциональное состояние в последнее время?", options: ["Очень хорошее", "Хорошее", "Нормальное", "Плохое"] },
            { question: "Как часто вы чувствуете радость?", options: ["Каждый день", "Иногда", "Редко", "Очень редко"] },
            { question: "Как часто вы думаете о своем будущем?", options: ["Часто", "Иногда", "Редко", "Никогда"] },
            { question: "Как вы себя чувствуете на выходных?", options: ["Отлично", "Хорошо", "Нормально", "Плохо"] }
        ]
    },
    test2: {
        name: "Тест 2: Личность",
        questions: [
            { question: "Как вы предпочитаете проводить время?", options: ["С друзьями", "Один", "В кругу семьи", "Не имеет значения"] },
            { question: "Что для вас важнее?", options: ["Независимость", "Взаимопонимание", "Риск", "Стабильность"] },
            { question: "Вы скорее интроверт или экстраверт?", options: ["Интроверт", "Экстраверт", "Смешанный тип"] },
            { question: "Как вы относитесь к переменам?", options: ["Люблю перемены", "Принимаю, если нужно", "Избегаю перемен"] },
            { question: "Как часто вы проявляете инициативу?", options: ["Часто", "Иногда", "Редко", "Никогда"] },
            { question: "Какую роль вы обычно играете в коллективе?", options: ["Лидер", "Поддержка", "Наблюдатель", "Исполнитель"] },
            { question: "Как вы решаете сложные задачи?", options: ["Самостоятельно", "Ищу помощь у других", "Пытаюсь избегать решения"] },
            { question: "Как вы реагируете на критику?", options: ["Принимаю спокойно", "Принимаю, но переживаю", "Не люблю критику", "Долго переживаю"] },
            { question: "Что для вас важнее — достижения или гармония?", options: ["Достижения", "Гармония", "И то, и другое"] },
            { question: "Как вы себя чувствуете в незнакомой ситуации?", options: ["Комфортно", "Чувствую некоторую неуверенность", "Довольно некомфортно"] }
        ]
    },
    test3: {
        name: "Тест 3: Город",
        questions: [
            { question: "Как часто вы гуляете по своему городу?", options: ["Очень часто", "Иногда", "Редко", "Практически никогда"] },
            { question: "Как вы оцениваете инфраструктуру города?", options: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"] },
            { question: "Какие эмоции вызывает у вас ваш город?", options: ["Гордость", "Безразличие", "Разочарование", "Страх"] },
            { question: "Сколько времени вы проводите в общественных местах города?", options: ["Много", "Средне", "Немного", "Очень мало"] },
            { question: "Как часто вам нравится изменять окружение города?", options: ["Часто", "Иногда", "Редко", "Никогда"] },
            { question: "Как часто вы думаете о том, чтобы переехать в другой город?", options: ["Очень часто", "Иногда", "Редко", "Никогда"] },
            { question: "Считаете ли вы свой город хорошим местом для жизни?", options: ["Да", "Скорее да", "Скорее нет", "Нет"] },
            { question: "Как часто вы посещаете культурные мероприятия в своем городе?", options: ["Очень часто", "Иногда", "Редко", "Практически никогда"] },
            { question: "Как вы оцениваете доступность транспорта в городе?", options: ["Отлично", "Хорошо", "Средне", "Плохо"] },
            { question: "Как часто вы сталкиваетесь с проблемами в городе?", options: ["Часто", "Иногда", "Редко", "Никогда"] }
        ]
    },
    test4: {
        name: "Тест 4: Поведение",
        questions: [
            { question: "Как вы реагируете на критику?", options: ["Спокойно", "Задевает меня", "Обижаюсь", "Не люблю критику"] },
            { question: "Как вы обычно поступаете в новой ситуации?", options: ["Изучаю ситуацию", "Действую быстро", "Жду указаний", "Избегаю решения"] },
            { question: "Как вы взаимодействуете с новыми людьми?", options: ["Легко и открыто", "Иногда стесняюсь", "Сложно, но стараюсь", "Избегаю общения"] },
            { question: "Что для вас важнее — быть правым или довольным?", options: ["Быть правым", "Довольным", "И то, и другое", "Мне всё равно"] },
            { question: "Как часто вы рискуете?", options: ["Часто", "Иногда", "Редко", "Очень редко"] },
            { question: "Как вы принимаете решения?", options: ["Анализирую все за и против", "Интуитивно", "Зависят от ситуации", "Не принимаю решения"] },
            { question: "Как вы себя ведете в коллективе?", options: ["Лидер", "Поддержка", "Наблюдатель", "Избегаю общения"] },
            { question: "Как часто вы чувствуете стресс?", options: ["Часто", "Иногда", "Редко", "Очень редко"] },
            { question: "Как вы справляетесь с трудностями?", options: ["Ищу решение", "Пропускаю через себя", "Жду помощи", "Просто не реагирую"] },
            { question: "Как вы относитесь к изменениям в жизни?", options: ["Открыто", "С осторожностью", "Сопротивляюсь", "Не люблю"] }
        ]
    }
};

// Главная страница
function startChoosingTest() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('testSelectionPage').style.display = 'block';
}

// Начало теста
function startTest(testId) {
    const test = testData[testId];
    document.getElementById('testSelectionPage').style.display = 'none';
    document.getElementById('testPage').style.display = 'block';

    let questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `<h3>${test.name}</h3>`;
    
    let answerHtml = '';
    test.questions.forEach((q, index) => {
        answerHtml += `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(option => `
                    <label><input type="radio" name="question${index}" value="${option}"> ${option}</label><br>
                `).join('')}
            </div>
        `;
    });
    questionContainer.innerHTML += answerHtml;
}

// Завершение теста
function finishTest() {
    let resultText = 'Результаты вашего теста:<br><br>';
    let analysis = '';
    
    let questions = document.querySelectorAll('.question');
    let answers = [];
    questions.forEach((q, index) => {
        let selectedOption = q.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
            resultText += `Вопрос ${index + 1}: ${selectedOption.value}<br>`;
        } else {
            answers.push('Не выбран');
        }
    });

    // Простой анализ ответов
    if (answers.length === 10) {
        if (answers[0] === 'Отлично' && answers[1] === 'Постоянно хорошее') {
            analysis = 'Вы, вероятно, очень позитивный человек с хорошим настроением в жизни.';
        } else {
            analysis = 'Ваши ответы показывают, что вы более скептично настроены или переживаете о некоторых аспектах жизни.';
        }
    }

    document.getElementById('testPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('resultAnalysis').innerHTML = analysis;
}

// Перезапуск теста
function restartTest() {
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('testSelectionPage').style.display = 'block';
}