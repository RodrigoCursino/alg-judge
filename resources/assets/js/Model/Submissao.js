class Submissao {


    static buildForm(submissao){

        const data = {
            id: submissao.id ? submissao.id : null,
            codigoFonte: submissao.codigoFonte ? submissao.codigoFonte : null,
            dataEnvio: submissao.dataEnvio ? submissao.dataEnvio : null,
            isDeleted: submissao.isDeleted ? submissao.isDeleted : null,
            tempoExecucao: submissao.tempoExecucao ? submissao.tempoExecucao : null,
            situacao: submissao.situacao ? submissao.situacao : null,
            problema: submissao.problema ? submissao.problema : null,
        };

        return this.form = new Form(data);
    };

};

export default Submissao;