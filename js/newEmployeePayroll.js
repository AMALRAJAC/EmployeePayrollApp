window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="Enter name";
            return;
           }  
         try{
            (new EmployeePayrollData()).name=name.value;;
            textError.textContent="valid"
            
        }catch(e){
            textError.textContent=e;
        }
    });
    const date=document.querySelector('#date');
    date.addEventListener('input',function(){
        let startDate= getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        try{
            (new EmployeePayrollData()).startDate=new Date(Date.parse(startDate));
            setTextValue('.date-error',"");
        }catch(e){
            setTextValue('.date-error',e);
        }
    });


    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });

});
