var courseName = document.getElementById("courseName");
var courseCategory = document.getElementById("courseCategory");
var coursePrice = document.getElementById("coursePrice");
var courseDescription = document.getElementById("courseDescription");
var courseCapacity = document.getElementById("courseCapacity");
var btn = document.getElementById("click");
var tbody = document.getElementById("data");
var deleteBtn = document.getElementById("deleteBtn");
var search = document.getElementById("search");
var currentIndex = 0;
var array=[];

btn.onclick = function(e) {
    e.preventDefault();
   if(btn.value =="Add Course")
   {
    addCourse();
   }
   else
   update();
    
}
function addCourse() {
    var course = {
        courseName :courseName.value,
        courseCategory : courseCategory.value,
        coursePrice : coursePrice.value,
        courseDescription : courseDescription.value,
        courseCapacity : courseCapacity.value
    }
    array.push(course);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Courses has been added successfully',
        showConfirmButton: false,
        timer: 1300
      })
    clearData();
    displayData();
}
function clearData() {
    courseName.value ="";
    courseCategory.value="";
    coursePrice.value="";
    courseDescription.value =""
    courseCapacity.value=""
}

function displayData(){
var data='';
for(var i=0; i<array.length ;i++){
    data+= `
    <tr>
    <td>${i+1}</td>
    <td>${array[i].courseName}</td>
    <td>${array[i].courseCategory}</td>
    <td>${array[i].coursePrice}</td>
    <td>${array[i].courseDescription}</td>
    <td>${array[i].courseCapacity}</td>
    <td><button class="btn btn-danger" onclick="deleteCourse(${i})">delete</button></td>
    <td><button class="btn btn-info" onclick="updateCourse(${i})">update</button></td>
</tr>
`
}
tbody.innerHTML=data;

}

function deleteCourse(index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            array.splice(index,1);
            displayData();
          Swal.fire(
            'Deleted!',
            'Your Course has been deleted.',
            'success'
          )
        }
      })
    
    
}

deleteBtn.onclick = function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            array = [];
            tbody.innerHTML="";
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
}

search.onkeyup = function(){
    var data='';
for(var i=0; i<array.length ;i++){
    if(array[i].courseName.toLowerCase().includes(search.value.toLowerCase()))
    {
        data+= `
        <tr>
        <td>${i+1}</td>
        <td>${array[i].courseName}</td>
        <td>${array[i].courseCategory}</td>
        <td>${array[i].coursePrice}</td>
        <td>${array[i].courseDescription}</td>
        <td>${array[i].courseCapacity}</td>
        <td><button class="btn btn-danger" onclick="deleteCourse(${i})">delete</button></td>
        <td><button class="btn btn-info" onclick="updateCourse(${i})">update</button></td>
    </tr>
    `
    }
    
    }
    tbody.innerHTML=data;
}

function updateCourse(index) {
var course = array[index]
    courseName.value =course.courseName;
    courseCategory.value=course.courseCategory;
    coursePrice.value=course.coursePrice;
    courseDescription.value =course.courseDescription;
    courseCapacity.value=course.courseCapacity;
    btn.value= "update";
    currentIndex = index

}
function update(){
    var course = {
        courseName :courseName.value,
        courseCategory : courseCategory.value,
        coursePrice : coursePrice.value,
        courseDescription : courseDescription.value,
        courseCapacity : courseCapacity.value
    }
array[currentIndex].courseName = course.courseName;
array[currentIndex].courseCategory = course.courseCategory;
array[currentIndex].coursePrice = course.coursePrice;
array[currentIndex].courseDescription = course.courseDescription;
array[currentIndex]. courseCapacity = course. courseCapacity;

displayData();
clearData();
btn.value = "Add Course"
}