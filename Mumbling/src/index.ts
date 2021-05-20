
export let Mumbling = (word: string) => {
   const wordSplited: string[] = [...word]
   let resultWord: string = '';

   for (let indexWord = 1; indexWord <= wordSplited.length; indexWord++) {
      for (let indexLetter = 0; indexLetter < indexWord; indexLetter++) {
         if (indexLetter === 0) resultWord = resultWord + wordSplited[indexWord - 1].toUpperCase()
         else resultWord = resultWord + wordSplited[indexWord-1].toLowerCase()
      }
      if (indexWord != wordSplited.length)
      resultWord =resultWord+'-' 
   }
   return resultWord
}

export function best_Mumbling(word: string): string {
   return word.split('')
   .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
   .join('-');
 }

console.log(Mumbling("ZpglnRxqenU"))
console.log(best_Mumbling("ZpglnRxqenU"))
