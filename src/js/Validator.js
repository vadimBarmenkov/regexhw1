export class Validator {
    validateUsername(username){

        const exeptThreeNumbersInRow = /\d{4}/;
        const wordAndNumberAccept = /\w*/;
        const dashAccept = /-*/;
        const wordInStart = /^[a-z]/;
        const wordInEnd = /[a-z]$/;

        if (wordInStart.test(username) && wordAndNumberAccept.test(username) && dashAccept.test(username) && wordInEnd.test(username) && !exeptThreeNumbersInRow.test(username)){
            return true;
        }
        return false;
    }

}