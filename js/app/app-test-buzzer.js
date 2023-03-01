const err = require('https://raw.githubusercontent.com/Konkery/ModuleAppError/main/js/module/ModuleAppError.min.js');
const NumIs = require('https://raw.githubusercontent.com/Konkery/ModuleAppMath/main/js/module/ModuleAppMath.min.js');
     NumIs.is(); //добавить функцию проверки целочисленных чисел в Number

const buzzer_class = require('https://raw.githubusercontent.com/konstantin-ki/Physics-heat-capacity/ver2/js/module/ModuleBuzzer2.min.js');

try {
    buzzer = new buzzer_class.ClassBuzzer(new buzzer_class.ClassBuzzerType(A0));
        buzzer.PlayBeep(new buzzer_class.ClassBuzzerTypePlay(50, 3, 4000, 0.2));
} catch(e){
    console.log(`Error>> ${e.Message}, Code>> ${e.Code}`);
}