/* 
Auteur: Luuk Vesters
Aanmaakdatum: 21-12-2021

Onderwerp: Project portfolio Luuk Vesters 
*/

var subjects = ["Plannen en ontwerpen", "Realiseren", "Testen en verbeteren", "Computervaardigheden", "Burgerschap", "Nederlands", "Engels", "Rekenen"]

var gradesPO = [6.9, 6.7, 7.0];
var gradesREA = [7.9, 6.7, 6.7];
var gradesTV = [5.1, 2.0, 6.7];
var gradesCOM = [4.7, 7.3, 6.7];
var gradesBUR = [7.0, 7.0, 7.0]
var gradesNE = [0.0, 0.0, 0.0];
var gradesEN = [7.6, 8.3, 6.9];
var gradesREK = [6.3, 5.9, 6.6];

var table = "";

function TableResult(myGrades, mySubjects)
{
    table += "<tr>";
    table += "<th>" + subjects[mySubjects] + "</th>";
    for(var i = 0; i < myGrades.length; i++)
    {
        table += "<td>" + myGrades[i] + "</td>";
    }
    table += "<td>" + Average(myGrades) + "</td>"
    table += "</tr>";
}

TableResult(gradesPO, 0);
TableResult(gradesREA, 1);
TableResult(gradesTV, 2);
TableResult(gradesCOM, 3);
TableResult(gradesBUR, 4);
TableResult(gradesNE, 5);
TableResult(gradesEN, 6);
TableResult(gradesREK, 7);

document.getElementById("tableBody").innerHTML = table;

function Average(mySubject)
{
    var averageGrade = 0;
    for(i = 0; i < mySubject.length; i++)
    {
        averageGrade += mySubject[i];
    }
    return (averageGrade / mySubject.length).toFixed(1);
}

