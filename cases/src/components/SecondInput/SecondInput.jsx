import React, {useState} from "react";
import '../Input/Input.css'



// function Cases() {
//
//     let [words, setWords, lastLetter, lettersArray] = useState('');
//
//     function getLastLetter(){
//         let input = [...words];
//         let index = input.length-1;
//         lettersArray = words.split('');
//         lastLetter = lettersArray[index];
//     }
//
//     function changeCases(value, index, array){
//         array.splice(index, 1, value);
//         words = array.join('');
//     }
//
//     function rulesCases(){
//         // правила
//         const mySet = new Set();
//         mySet.add({
//             a: ["ы", "е", "у", "ой", "е"],
//
//
//         })
//         console.log(mySet)
//
//         // const rule = mySet.forEach()
//         return changeCases()
//     }
//
//     function handleChange(event) {
//         setWords(event.target.value);
//         getLastLetter()
//         console.log(lettersArray, lastLetter)
//     }
//
//     function handleBlur() {
//         rulesCases();
//         setWords(words);
//     }

function SecondInput() {
    const [words, setWords] = useState('');
    const [value, setValue] = useState('Падеж');

    let input = [...words];
    let lastLetter = input[input.length-1];
    //Родительный падеж

    if (lastLetter === 'а' && value === 'Родительный падеж') {
        input.pop();
        input.push("ы");
    } else if (lastLetter === 'б' || 'в' || 'м' || 'г' || 'д' || 'л' || 'ж' || 'з' || 'к' || 'н' || 'п' || 'т' || 'ф' || 'ч' || 'ц' || 'щ' || 'р' || 'х' ) {
        input.push("a");
    }

    // //Дательный падеж
    // if (lastLetter === 'а' && value === 'Дательный падеж') {
    //     input.pop();
    //     input.push('е');
    // } else if (lastLetter === 'б' || 'в' || 'м' || 'г' || 'д' || 'л' || 'ж' || 'з' || 'к' || 'н' || 'п' || 'т' || 'ф' || 'ч' || 'ц' || 'щ' || 'р' || 'х' && value === 'Дательный падеж') {
    //     input.push("у");
    // }
    //
    // //Винительный падеж
    // if (lastLetter === 'а'&& value === 'Винительный падеж') {
    //     input.pop();
    //     input.push('у');
    // } else if (lastLetter === 'б' || 'в' || 'м' || 'г' || 'д' || 'л' || 'ж' || 'з' || 'к' || 'н' || 'п' || 'т' || 'ф' || 'ч' || 'ц' || 'щ' || 'р' || 'х' && value === 'Винительный падеж') {
    //     input.push("a");
    // }
    // //Творительный падеж
    // if (lastLetter === 'а'&& value === 'Творительный падеж') {
    //     input.pop();
    //     input.push('ой');
    // } else if (lastLetter === 'б' || 'в' || 'м' || 'г' || 'д' || 'л' || 'ж' || 'з' || 'к' || 'н' || 'п' || 'т' || 'ф' || 'ч' || 'ц' || 'щ' || 'р' || 'х' && value === 'Творительный падеж') {
    //     input.push("a");
    // }
    // //Предложный падеж
    // if (lastLetter === 'а'&& value === 'Предложный падеж') {
    //     input.pop();
    //     input.push('е');
    // } else if (lastLetter === 'б' || 'в' || 'м' || 'г' || 'д' || 'л' || 'ж' || 'з' || 'к' || 'н' || 'п' || 'т' || 'ф' || 'ч' || 'ц' || 'щ' || 'р' || 'х' && value === 'Предложный падеж') {
    //     input.push("a");
    // }



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
