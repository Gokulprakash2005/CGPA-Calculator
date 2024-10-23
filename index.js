let semesterCount = 4;

function addsem() {
    semesterCount++;
    var newRow = `
    <input type="number" class="form-control form-control-lg mt-2" id="sem${semesterCount}" name="sem${semesterCount}" placeholder="Semester ${semesterCount} GPA" required>
    `;
    document.getElementById("sem").insertAdjacentHTML('beforeend', newRow);
}

function removesem()
{
    if(semesterCount>0)
    {
    const lastSemInput = document.getElementById(`sem${semesterCount}`);
        lastSemInput.remove();
        semesterCount--;
    }
}

function GetCGPA()
{
    var sum=0;
    for(var i=1;i<=semesterCount;i++)
    {
       sum=sum+parseFloat(document.getElementById(`sem${i}`).value);
    }
    document.getElementById("calcgpa").innerHTML="Your CGPA is :"+sum/semesterCount;
}
