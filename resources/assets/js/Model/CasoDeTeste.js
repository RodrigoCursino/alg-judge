class CasoDeTeste {

    static buildForm(casoDeTeste){

        const data = {
            id: casoDeTeste.id ? casoDeTeste.id : null,
            exemplo: casoDeTeste.exemplo ? casoDeTeste.exemplo : null,
            entrada: casoDeTeste.entrada ? casoDeTeste.entrada : null,
            isDeleted: casoDeTeste.isDeleted ? casoDeTeste.isDeleted : null,
            problema: casoDeTeste.problema ? casoDeTeste.problema : null,
        };

        return this.form = new Form(data);
    };

};

export default CasoDeTeste;