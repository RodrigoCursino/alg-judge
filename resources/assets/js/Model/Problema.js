class Problema {

    static buildForm(problema){

        const data = {
            id: problema.id ? problema.id : null,
            titulo: problema.titulo ? problema.titulo : null,
            descricao: problema.descricao ? problema.descricao : null,
            ativo: problema.ativo ? problema.ativo : true,
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
            ativo: true,
            descricaoEntrada: form.descricaoEntrada,
            descricaoSaida: form.descricaoSaida,
        };

        return data;
    };

};

export default Problema;