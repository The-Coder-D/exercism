export function format(name: string, number: number): string{
let suffix: string ="th";
let lasttwo: number =number % 100;
  let lastDigit: number =number % 10;
  
  if (lasttwo !==11 && lasttwo !==12 && lasttwo !==13){
    if (lastDigit === 1) {
      suffix = "st";
    } else if (lastDigit === 2) {
      suffix = "nd";
    } else if (lastDigit === 3) {
      suffix = "rd";
    }
    }
  










  
  return (`${name}, you are the ${number}${suffix} customer we serve today. Thank you!`)
}
