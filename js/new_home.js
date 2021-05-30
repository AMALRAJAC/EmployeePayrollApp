window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml=()=>{
    const innerHtml=
    '<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Action</th></tr><tr><td><img class="profile" alt="" src="profile-images/2.jpg"></td><td>Narayan Mahadevan</td><td>Male</td><td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td><td>300000</td><td>1 Nov 2020</td><td><img id="1" onclick="remove(this)" alt="delete" src=""><img id="1" alt="edit" onclick="update(this)" src=""></td></tr>';
            
            document.querySelector('#table-display').innerHtml=innerHtml;
}