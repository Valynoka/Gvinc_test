import React, {useState} from "react";
import '../Input/Input.css'

const wordsEnd = {
    а: ["ы", "е", "у", "ой", "е"],
    и: ["ей", "ям", "%", "ями", "ях"],
    // "б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х": ["%а", "%у", "%а", "%ом", "%е"],
    // ая: ["ой", "ой", "%", "ой", "ой"],
    // ый: ["ого", "ому", "%", "ым", "ом"],
    // й: ["я", "ю", "я", "ем", "е"],
    // о: ["а", "у", "%", "ом", "е"],
    // "с/ш": ["%а", "%у", "%", "%ом", "%е"],
    // ы: ["ов", "ам", "%", "ами", "ах"],
    // ь: ["я", "ю", "я", "ем", "е"],
    // уль: ["ули", "уле", "улю", "улей", "уле"],
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
