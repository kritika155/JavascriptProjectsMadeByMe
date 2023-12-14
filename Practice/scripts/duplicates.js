            var arr= [1,1,2,2,2,3,3,4,5,6,6,7,8,9];
                 var duplicates=[];
                 arr.forEach((a)=>{
      if(!duplicates.includes(a)){
      duplicates.push(a);
      }
      else{
          return duplicates;
      }
                 })