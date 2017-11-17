class Problema {

    static buildForm(problema){

        const data = {
            id: problema.id ? problema.id : null,
            titulo: problema.titulo ? problema.titulo : null,
            descricao: problema.descricao ? problema.descricao : null,
            descricaoEntrada: problema.descricaoEntrada ? problema.descricaoEntrada : null,
            descricaoSaida: problema.descricaoSaida ? problema.descricaoSaida : null,
            isDeleted: problema.isDeleted ? problema.isDeleted : null,
        };

        return this.form = new Form(data);
    };

};

export default Problema;