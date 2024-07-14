import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  pure:false
})
export class PipePipe implements PipeTransform {

  transform(value:any, args:any){
  //  if(args === ''){
  //   return value;
  //  }else{
  //   return value.filter((item:any)=> item.name.toLowerCase().indexOf(args.toLowerCase())>-1)
  //  }
  // }
  if (args){
if(args === ""){
  console.log(value)
return value;
}else{
   return value.filter((item:any)=> item.name.toLowerCase().indexOf(args.toLowerCase())>-1)

}
  }else{;
  return value
  }
  }
}
