function kolobok(name) {
switch(name) {
    case 'дедушка':{
        return 'Я от дедушки ушел';
        break;
    }
    case 'лиса':{
        return 'Меня съели';
        break;
    }
    case 'заяц':{
        return 'Я убежал';
        break;
    }
};
}
const result=kolobok('лиса');
console.log(result)



function newYear(name) {
    switch(name){case 'Дед Мороз':
        return `${name}!${name}!${name}!`;
        break;
        case'Снегурочка':
        return (`${name}!${name}!${name}!`);
        break;
    }
    }
    const result2=newYear('Дед Мороз')
    console.log(result)