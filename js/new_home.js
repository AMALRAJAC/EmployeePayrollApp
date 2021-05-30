
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')?
            JSON.parse(localStorage.getItem('EmployeePayrollList')):[];

}
const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>StartDate</th><th>Actions</th>";
    if(empPayrollList.length==0) return;
    let innerHtml=`${headerHtml}`;
    for (const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
        <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td>
        <img class="image" id="${empPayrollData._id}" onclick="remove(this)"
                src="images/delete.png" alt="delete">
        <img class="image" id="${empPayrollData._id}" onclick="remove(this)"
                src="images/edit.png" alt="edit">       
        </td>        
        
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}
