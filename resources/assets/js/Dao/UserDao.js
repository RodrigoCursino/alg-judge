class UserDao {

    constructor(form) {
       this.form = form;
    }

    submitForm () {
        axios.post('https://tcc-test-2fc6e.firebaseio.com/post.json',{
            user: {name: this.form.name, email: this.form.email}})
            .then(response => {
                console.log('saved',response);
            });
    };

    updateForm () {

    };

};

export default UserDao;