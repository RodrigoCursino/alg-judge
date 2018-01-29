class CasoDeTesteDao {

    static submitForm (form){

        const data = {
            id: form.id ? form.id : 0,
            exemplo: form.exemplo ? form.exemplo : null,
            entrada: form.entrada ? form.entrada : null,
            saida: form.saida ? form.saida : null,
            ativo: true,
            problema: form.problema ? form.problema : null,
        };

        return data;
    };

    updateForm () {

    };

};

export default CasoDeTesteDao;