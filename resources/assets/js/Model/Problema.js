class Problema {

    static buildForm(problema){

        const data = {
            id: problema.id ? problema.id : null,
            titulo: problema.titulo ? problema.titulo : null,
            descricao: problema.descricao ? problema.descricao : null,
            delete: problema.delete ? problema.delete : null,
            descricaoEntrada: problema.descricaoEntrada ? problema.descricaoEntrada : null,
            descricaoSaida: problema.descricaoSaida ? problema.descricaoSaida : null,
        };

        return this.form = new Form(data);
    };

    static buildProblema(form){

        const data = {
            id: form.id,
            titulo: form.titulo,
            descricao: form.descricao,
            delete: form.delete,
            descricaoEntrada: form.descricaoEntrada,
            descricaoSaida: form.descricaoSaida,
        };

        return data;
    };

};

export default Problema;