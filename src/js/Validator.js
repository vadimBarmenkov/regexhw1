export class Validator {
    validateUsername(username){
        if (/\d\d\d/.test(username)){
            return false;
        }
        let a = /^[a-z][-_\w\d]*[a-z]$/.test(username);
        return a;
    }

}