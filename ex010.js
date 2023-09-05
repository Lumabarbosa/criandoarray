const people = [
    ["Tyrone", "30", "Médico", "Recife"],
    ["Janet", "15", "Estudante", "Olinda"],
    ["Maria", "26", "Professora", "Jaboatão dos Guararapes"],
    ["Claudia", "40", "Engenheira", "Paulista"]
];
console.table(people);

for (var pessoa of people){
  console.log(pessoa)
}

for (var pessoa in people){
  console.log(pessoa)
}
  