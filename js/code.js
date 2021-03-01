// function arr(array){
//     var cont2 = 0;
//     var cont = 0;
//     var indiceArrayImpar=[];
//     var arrayImpar=[];
//     var arrayImparOrdenado=[];
//     while(cont < array.length){
//         if(array[cont] % 2 != 0){
//         indiceArrayImpar.push(cont);
//         arrayImpar.push(array[cont]);
//         }
//         cont++;        
//     }
//     arrayImparOrdenado = arrayImpar.sort();
    
//     while(cont2 < indiceArrayImpar.length){
//         array[indiceArrayImpar[cont2]] = arrayImparOrdenado[cont2];
//         cont2++;
//     }
//     return array;
// }

// console.log(arr([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// function findShort(s){
    
//     count = 0;
//     var array= s.split(" ");
//     console.log(array);
//     menor = array[1].length;
//     while(count < array.length){
//         if(menor >= array[count].length){
//             menor = array[count].length;
//         }
//         count++;
      
//     }
//     return menor;
    
//   }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// function digital_root(n) {
//   var sum=0;
//   var count=0;
//   var nArray = (String(n)).split("");
//   console.log(nArray);
//   do{    
//     while(count < nArray.length){
//         sum += parseInt(nArray[count]);
//         count++;
//     }
//     nArray = (String(sum)).split("");
//     if(nArray.length >= 2){sum=0;count=0;}
//     }while(nArray.length >= 2); 
//   return sum;
// }
// console.log(digital_root(1689));

// function convertArray(string){
//   n=string.split(/(?=[A-Z])/);
//   return n.join(" ");
// }

// console.log(convertArray("holaMundo"));

// function remove(array, r_array){
//   count=0;
//   count2=0;
//   var res=[];
//   while(count < r_array.length){
//     count2=0;
//     res=[];
//     while(count2 < array.length){
//       if(array[count2] != r_array[count]){
//       res.push(array[count2]);
//       }
//       count2++;     
//     }    
//     array=res;
//     count++;
//   }
//   return res;
// }

// console.log(remove([1,2,3,4],[1,2,3]));


// function findUniq(arr) {
//   var result=arr.filter(x=> x == (arr[0]));
//   var count=0;
//   if(result.length>1){
//     while(count<arr.length){
//       if(arr[0]!=arr[count]){
//         result=arr[count];
//         break;
//       }
//       count++;
//     }
//   }
//     return result; 
  
// }
    
// console.log(findUniq([0, 1, 0 ]));

// var numbers = [4, 2, 5, 11, 3];
// console.log(numbers);
// numbers.sort((a, b)=>{return a - b});
// console.log(numbers);

// const diferenciaDeArreglos = (arr1, arr2) => {
// 	return arr1.filter(elemento => arr2.indexOf(elemento) == -1);

// function camelCase(a){
//   arr=a.split(" ");
//   for(i=0; i < arr.length ; i++){
//     str=arr[i];
//     arr[i]=str.replace(str.charAt(0), str.charAt(0).toUpperCase());

//   }
//   return arr.join(" ");
// }

// console.log(camelCase("test case"));

// Test.describe("Basic tests",_=>{
//   Test.assertEquals("test case".camelCase(), "TestCase");
//   Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
//   Test.assertEquals("say hello ".camelCase(), "SayHello");
//   Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
//   Test.assertEquals("".camelCase(), "");
//   })
// function solution(str){
//   var arr= str.split("");  
//   if((arr.length%2)!=1){
//     arr=separar(arr);
//   } 
//   else{
//     arr.push("_");
//     arr=separar(arr);
//   }
//   return arr
// }
// console.log(solution("abcde"));

// function separar(arr){
//   var count=0;
//   var resul=[];
//   while(count<arr.length){
//     resul.push(arr[count]+arr[count+1]);
//     count= count+2;
//   }
//   return resul;
// }
function humanReadable(seconds) {
  var sec=0;
  var min=0;
  var hour=0;
  var resul=0;
  sec=seconds%60;
 
  min=(seconds-(60*sec))%60;
 
  hour=(seconds-(sec+min*60))/3600;
  console.log(hour);
  resul = hour + ":" + min + ":" + sec;
  return resul;
  
}
console.log(humanReadable(45296));