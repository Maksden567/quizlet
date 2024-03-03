import { IWord } from "../../store/rtk/useWord";

export const  selectRandomElements = (arr:IWord[], numElements:number, excludedElement:string) => {
    let copyArray = arr.slice();
    let randomElements:string[] = [];
  
    // Поки не вибрано потрібну кількість унікальних елементів
    while (randomElements.length < numElements) {
      let randomIndex = Math.floor(Math.random() * copyArray.length);
      let selectedElement = copyArray.splice(randomIndex, 1)[0].translateName;
      
      // Перевірка на унікальність та відсутність виключеного елемента
      if (!randomElements.includes(selectedElement) && selectedElement !== excludedElement) {
        randomElements.push(selectedElement);
      }
    }
    
    return randomElements;
  }

export  function shuffleArray(arr:string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }