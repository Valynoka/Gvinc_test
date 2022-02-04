import React, {useState} from "react";
import '../Input/Input.css'


function SecondInput() {
    const [words, setWords] = useState('');
    const [value, setValue] = useState('Падеж');

    let input = [...words];
    console.log(input)
    let lastLetter = input[input.length-1];
    console.log(lastLetter)

    const consonantLetters = ["б", "в", "м", "г", "д", "л", "ж", "з", "к", "н", "п", "т", "ф", "ч", "ц", 'щ', 'р', 'х']

    // Родительный падеж
    if (lastLetter === 'а' && value === 'Родительный падеж') {
        input.pop();
        input.push("ы");
    } else if (lastLetter === consonantLetters.find((item)=> item === lastLetter) && value === 'Родительный падеж'){
        input.push(input.splice(input.lastIndexOf(lastLetter)+1, 1, 'a'))
    }

    //Дательный падеж
    if (lastLetter === 'а' && value === 'Дательный падеж') {
        input.pop();
        input.push('е');
    } else if (lastLetter === consonantLetters.find((item)=> item === lastLetter) && value === 'Дательный падеж'){
        input.push(input.splice(input.lastIndexOf(lastLetter)+1, 1, 'у'))
    }

    //Винительный падеж
    if (lastLetter === 'а'&& value === 'Винительный падеж') {
        input.pop();
        input.push('у');
    } else if (lastLetter === consonantLetters.find((item)=> item === lastLetter) && value === 'Винительный падеж'){
        input.push(input.splice(input.lastIndexOf(lastLetter)+1, 0, ''))
    }
    //Творительный падеж
    if (lastLetter === 'а'&& value === 'Творительный падеж') {
        input.pop();
        input.push('ой');
    } else if (lastLetter === consonantLetters.find((item)=> item === lastLetter) && value === 'Творительный падеж'){
        input.push(input.splice(input.lastIndexOf(lastLetter)+1, 1, 'ом'))
    }
    //Предложный падеж
    if (lastLetter === 'а'&& value === 'Предложный падеж') {
        input.pop();
        input.push('е');
    } else if (lastLetter === consonantLetters.find((item)=> item === lastLetter) && value === 'Предложный падеж'){
        input.push(input.splice(input.lastIndexOf(lastLetter)+1, 1, 'у'))
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

export default SecondInput
