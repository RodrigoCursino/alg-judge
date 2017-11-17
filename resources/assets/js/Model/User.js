class User {

    static buildForm(user) {

        const data = {
            id: user.id ? user.id : null,
            nome: user.nome ? user.nome : null,
            senha: user.senha ? user.senha : null,
            email: user.email ? user.email : null,
            isDeleted: user.isDeleted ? user.isDeleted : null,
            papel: user.papel ? user.papel : null,
        };

        return this.form = new Form(data);
    };

};

export default User;