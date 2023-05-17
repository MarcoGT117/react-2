const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3'];
const chanchosTristes = ['chancho 4', 'chancho 5', 'chancho 6'];
const otrosChanchos = [];

/* module.exports = {
    chanchosFelices,
    chanchosTristes
} */

const fn1 = ()=> console.log('soy la funcion 1');

function fn2() {
    console.log('soy la funcion 2');
}

export{
    chanchosTristes,
    otrosChanchos,
    fn1,
    fn2
}
export default chanchosFelices