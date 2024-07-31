let v = 'A', print = '';

switch(v){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        print = `${v} es una vocal`;
        break;
    default:
        print = `${v} no es una vocal`;
        break;
}

console.log(print); // A es una vocal