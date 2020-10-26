import { handleSubmit } from './js/formHandler';
import { showResults, checkForName } from './js/nameChecker';
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
console.log("CHECK FOR NAME:::",checkForName);
console.log("CHANGE!!");


export{
    handleSubmit,
    checkForName,
    showResults
}