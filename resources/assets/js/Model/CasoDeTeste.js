class CasoDeTeste {

    static buildForm(casoDeTeste){

        const data = {
            id: casoDeTeste.id ? casoDeTeste.id : null,
            exemplo: casoDeTeste.exemplo ? casoDeTeste.exemplo : null,
            entrada: casoDeTeste.entrada ? casoDeTeste.entrada : null,
            saida: casoDeTeste.saida ? casoDeTeste.saida : null,
            ativo: casoDeTeste.ativo ? casoDeTeste.ativo : null,
            problema: casoDeTeste.problema ? casoDeTeste.problema : null,
        };

        return this.form = new Form(data);
    };

};

export default CasoDeTeste;