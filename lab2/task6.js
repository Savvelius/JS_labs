journal = {}

for (let i = 0; i < 3; i++) {
    subject = prompt('Введите название предмета')
    grade = Number(prompt('Введите оценку по этому предмету'))

    journal[subject] = grade
}

count_bad_grades = 0
Object.values(journal).forEach(grade => {
    if (grade < 4) {
        count_bad_grades++
    }
})

if (count_bad_grades === 0) {
    console.log("Студенту назначена стипендия")
}