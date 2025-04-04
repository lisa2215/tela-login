import { SERVER_CFG } from '../appConfig';


class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastraLivro;
    private routeAtualizaLivro;
    private routeRemovelivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livro';
        this.routeCadastraLivro = '/novo/livro';
        this.routeAtualizaLivro = '/atualiza/livro';
        this.routeRemovelivro = '/remove/livro';
    }

    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if (respostaAPI.ok) {
                const listaDeLivro = await respostaAPI.json();
                return listaDeLivro;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();