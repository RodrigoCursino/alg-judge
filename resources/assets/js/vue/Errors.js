class Errors {

    construtor() {

        this.errors = {};

    };

    get(field) {

        if (this.errors[field]) {

            this.errors[field][0];

        };

    };

    any() {

        return Object.keys(this.errors).length > 0;

    };

    record(errors) {

        this.errors = errors;

    };

    clear(field) {

        if (field) {

            delete this.errors[field];

            return;

        };

        this.errors = {};
    };

    has(field) {

        if (this.errors[field]) {
            return this.errors.hasOwnProperty(field);
        }

    };
};


class Form {


    constructor(data) {

        this.originalData = data;

        for (let field in data) {

            this[field] = data[field];

        };

        this.errors = new Errors();

    };


    reset() {

        for (let field in this.originalData) {

            this.errors.clear(field);
            this[field] = '';

        }

    };


    data(){

        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;

    };


    submit(method, uri) {

        return  new Promise((resolve , reject) => {

            axios[method](uri, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);

                })
                .catch(this.onFail.bind(this));

        });

    };

    onSuccess() {
        console.log('Data Saved with Successful');
        this.reset();
    };

    onFail() {

        this.errors.record(error.response.data);

    };


}



