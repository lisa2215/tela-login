import { SERVER_CFG } from '../appConfig';

export class EmprestimoRequests {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastraEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimo';
        this.routeCadastraEmprestimo = '/novo/emprestimo';
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';
    }

    /**
     * função que busca lista de emprestimos na API
    * @returns Lista com os emprstimos cadastrados no sistemas
    */
    async listarEmprestimos()  {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if(respostaAPI.ok){
            
                const listadeEmprestimo = await respostaAPI.json();
                return listadeEmprestimo;
            }    
                
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new EmprestimoRequests();

