import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    var string = '';
    var words = value.split(" ");
    const [count] = args
    // console.log(words);
    words.forEach((element:any,index:number) => {
      if(index >= (count || 5)){
      }else{
        string += element + ' '
      }
    });

    // console.log(string);


    return string;
  }

}
