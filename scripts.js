console.log('-----------------------#5')
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    sayYes = () => console.log("Вы согласились."), // нужно обновить данное место
    sayNo = () => console.log("Вы отменили выполнение.") // нужно обновить данное место
);



