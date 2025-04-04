import { SERVER_CFG } from '../appConfig';

export class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastraAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastraAluno = '/novo/aluno';
        this.routeAtualizaAluno = '/atualiza/aluno';
        this.routeRemoveAluno = '/remove/aluno';
    }

    /**
     * função que busca lista de alunos na API
    * @returns Lista com os alunos cadastrados no sistemas
    */
    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if(respostaAPI.ok){
            
                const listadeAlunos = await respostaAPI.json();
                return listadeAlunos;
            }    
                
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequests();

