import React, {useState} from "react";
import '../Input/Input.css'

const wordsEnd = {
    а: ["ы", "е", "у", "ой", "е"],
    б: ["ба", "бу", "ба", "бом", "бе"],
    в: ["ва", "ву", "в", "вом", "ве"],
    г: ["га", "гу", "г", "гом", "ге"],
    д: ["да", "ду", "д", "дом", "де"],
    е: ["е", "е", "е", "е", "е"],
    ж: ["жа", "жу", "жа", "жом", "же"],
    з: ["за", "зу", "з", "зом", "зе"],
    и: ["ей", "ям", "", "ями", "ях"],
    й: ["я", "ю", "й", "ем", "е"],
    к: ["к", "ку", "к", "ком", "ке"],
    л: ["ла", "лу", "л", "лом", "ле"],
    м: ["ма", "му", "ма", "мом", "ме"],
    н: ["на", "ну", "н", "ном", "не"],
    о: ["а", "у", "о", "ом", "е"],
    п: ["па", "пу", "па", "пом", "пе"],
    р: ["ра", "ру", "р", "ром", "ре"],
    с: ["са", "су", "с", "сом", "се"],
    т: ["та", "ту", "т", "том", "те"],
    у: ["у", "у", "у", "у", "у"],
    ф: ["фа", "фу", "ф", "фом", "фе"],
    х: ["ха", "ху", "х", "хом", "хе"],
    ц: ["ца", "цу", "ц", "цем", "це"],
    ч: ["ча", "чу", "ча", "чем", "че"],
    ш: ["ша", "шу", "ш", "шем", "ше"],
    щ: ["ща", "щу", "щ", "щем", "ще"],
    ы: ["ов", "ам", "ы", "ами", "ах"],
    ь: ["я", "ю", "я", "ем", "е"],
    э: ["э", "э", "э", "э", "э"],
    // ю: ["э", "э", "э", "э", "э"],
    я: ["и", "е", "ю", "ей", "е"]
}

function ThirdInput() {
    const [words, setWords] = useState('');
    const [value, setValue] = useState('Именительный падеж');
    let input = [...words];
    let lastLetter = input[input.length-1];
    const wordsEndKeys = Object.keys(wordsEnd);
    let wordsEndValue = wordsEndKeys.find((item) => item === lastLetter)
    let findArray = wordsEnd[wordsEndValue];
    let findLetter;


    switch (lastLetter === wordsEndValue) {
        case value === 'Родительный падеж':
            findLetter = findArray?.find(n => n === findArray[0]);
            input.splice(input.lastIndexOf(lastLetter), 1, findLetter);
            break;
        case value === 'Дательный падеж':
            findLetter = findArray?.find(n => n === findArray[1]);
            input.splice(input.lastIndexOf(lastLetter), 1, findLetter);
            break;
        case value === 'Винительный падеж':
            findLetter = findArray?.find(n => n === findArray[2]);
            input.splice(input.lastIndexOf(lastLetter), 1, findLetter);
            break;
        case value === 'Творительный падеж':
            findLetter = findArray?.find(n => n === findArray[3]);
            input.splice(input.lastIndexOf(lastLetter), 1, findLetter);
            break;
        case value === 'Предложный падеж':
            findLetter = findArray?.find(n => n === findArray[4]);
            input.splice(input.lastIndexOf(lastLetter), 1, findLetter);
            break;
    }

    return (
        <>
            <h3 className={'input__subtitle'}>{value}: {input}</h3>
            <form className={'input__form'}>
                <label className={'input__label'}>
                    <input
                        className={'input__input'}
                        type={'text'}
                        required
                        value={words}
                        onChange={(event)=>setWords(event.target.value)}
                    />
                </label>
                <select className={'input__select'} value={value} onChange={(e) =>setValue(e.target.value)}>
                    <option className={'input__option'} selected>Выберите падеж</option>
                    <option className={'input__option'} value={'Родительный падеж'}>Родительный падеж</option>
                    <option className={'input__option'} value={'Дательный падеж'}>Дательный падеж</option>
                    <option className={'input__option'} value={'Винительный падеж'}>Винительный падеж</option>
                    <option className={'input__option'} value={'Творительный падеж'}>Творительный падеж</option>
                    <option className={'input__option'} value={'Предложный падеж'}>Предложный падеж</option>
                </select>
            </form>
        </>
    )
}
export default ThirdInput
