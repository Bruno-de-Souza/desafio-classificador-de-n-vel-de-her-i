let label = 'Goku';
let xp = 10000;
let level = '';

if (xp <= 1000) {
    level = 'ferro';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 1001 && xp <= 2001) {
    level = 'Bronze';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 2001 && xp <= 5000) {
    level = 'Prata';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 5001 && xp <= 7000) {
    level = 'Ouro';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 7001 && xp <= 8000) {
    level = 'Platina';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 8001 && xp <= 9000) {
    level = 'Ascedente';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else if (xp >= 9001 && xp <= 10000) {
    level = 'Imortal';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
} else {
    level = 'Radiante';
    console.log('O Heroí de nome ' + label + ' está no nível de ' + level);
}