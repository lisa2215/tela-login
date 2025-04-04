import { useEffect, useState } from "react";
import EmprestimosRequests from "../../../fetch/EmprestimoRequests";
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';



function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-refresh" text />;


    useEffect(() => {
        const fetchEmprestimo = async () => {
            try {
                const listaDeEmprestimo = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(listaDeEmprestimo);
            } catch (error) {
            console.error(`Erro ao buscar alunos: ${error}`);
            }
        };
        fetchEmprestimo();
    },  [emprestimos]);


    return(
        <>
          <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
             paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
             currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
             <Column field="nomeAluno" header="Nome do aluno" style={{ width: '25%' }}></Column>
             <Column field="nomeLivro" header="Nome do livro" style={{ width: '25%' }}></Column>
             <Column field="dataEmprestimo" header="data de emprestimo" style={{ width: '25%' }}></Column>
             <Column field="dataDevolucao" header="Data de devolução style={{ width: '25%' }}></Column>
          </DataTable>
        </>
    );
}

export default TabelaEmprestimo;