class ProblemaDao {


    static  submitForm (form) {

        const data = {

            id: form.id ?  form.id : null ,
            delete: form.delete ?  form.delete : null ,
            descricao: form.descricao ? form.descricao : null,
            descricaoEntrada: form.descricaoEntrada ? form.descricaoEntrada: null,
            descricaoSaida: form.descricaoSaida ? form.descricaoSaida : null  ,
            titulo: form.titulo ? form.titulo : null,

        };

    };

    updateForm () {

    };

    static getAll(){

            axios.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {

                console.log('Get All', response.data);
                return response.data;

            });

    }



};

export default ProblemaDao;