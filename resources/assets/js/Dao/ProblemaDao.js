class ProblemaDao {

    constructor(form) {
       this.form = form;
    }

    submitForm () {
        debugger;

        /*

        axios.post('http://localhost:8084/alg-judge/rest/problema',{problema: this.form}).then(response => {
            console.log('saved', response);
        });

        */

        axios.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {
            console.log('saved', response);
        });

    };

    updateForm () {

    };

};

export default ProblemaDao;